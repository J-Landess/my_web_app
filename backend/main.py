from fastapi import FastAPI, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from database import get_db, engine
from models import Base
from schemas import UserCreate, UserLogin, UserResponse, Token
from auth import get_password_hash, verify_password, create_access_token, get_current_user, get_current_admin_user
from security import (
    setup_security_middleware, 
    add_security_headers, 
    validate_environment,
    rate_limit_register,
    rate_limit_login,
    rate_limit_general
)
from models import User
from slowapi import Limiter
from slowapi.util import get_remote_address
import os
from dotenv import load_dotenv

load_dotenv()

# Validate environment variables
try:
    env_config = validate_environment()
    print(f"✅ Environment validated - Running in {env_config['ENVIRONMENT']} mode")
except ValueError as e:
    print(f"❌ Environment validation failed: {e}")
    exit(1)

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="Wiseman Psychedelics API", 
    version="1.0.0",
    description="Consciousness research and psychedelic education platform API",
    docs_url="/docs" if env_config["ENVIRONMENT"] == "development" else None,
    redoc_url="/redoc" if env_config["ENVIRONMENT"] == "development" else None
)

# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

# Set up security middleware
setup_security_middleware(app)
add_security_headers(app)

@app.post("/register", response_model=Token)
@limiter.limit(rate_limit_register())
def register(request: Request, user: UserCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create new user
    hashed_password = get_password_hash(user.password)
    db_user = User(
        name=user.name,
        age=user.age,
        email=user.email,
        hashed_password=hashed_password,
        phone=user.phone,
        street=user.street,
        city=user.city,
        state=user.state,
        zip=user.zip,
        country=user.country,
        is_subscribed=user.is_subscribed
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    # Create access token
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/login", response_model=Token)
@limiter.limit(rate_limit_login())
def login(request: Request, user: UserLogin, db: Session = Depends(get_db)):
    # Authenticate user
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create access token
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/me", response_model=UserResponse)
@limiter.limit(rate_limit_general())
def read_users_me(request: Request, current_user: User = Depends(get_current_user)):
    return current_user

@app.get("/newsletter")
@limiter.limit(rate_limit_general())
def get_newsletter_subscribers(request: Request, current_user: User = Depends(get_current_admin_user), db: Session = Depends(get_db)):
    subscribers = db.query(User).filter(User.is_subscribed == True).all()
    return subscribers

@app.get("/")
def read_root():
    return {"message": "Welcome to Wiseman Psychedelics API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
