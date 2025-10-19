# Wiseman Psychedelics Backend

FastAPI backend for the Wiseman Psychedelics web application.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your SECRET_KEY and other settings
```

4. Run the development server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login with email and password
- `GET /me` - Get current user data (requires authentication)
- `GET /newsletter` - Get all newsletter subscribers (admin only)

## Database

The app uses SQLite with SQLAlchemy ORM. The database file will be created automatically as `wiseman_psychedelics.db`.

## Authentication

Uses JWT tokens with 30-day expiration. Include the token in the Authorization header:
```
Authorization: Bearer <your-token>
```
