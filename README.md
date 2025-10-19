# Wiseman Psychedelics Web App

A full-stack web application for Wiseman Psychedelics featuring user registration, authentication, and consciousness research resources.

## Features

- **User Management**: Registration, login, and profile management
- **Newsletter Subscription**: Optional newsletter signup with admin management
- **Consciousness Resources**: Curated YouTube videos and research links
- **Dark Psychedelic Theme**: Neon accents and smooth animations
- **JWT Authentication**: Secure token-based authentication
- **Admin Panel**: Newsletter subscriber management

## Tech Stack

### Backend
- FastAPI (Python)
- SQLAlchemy ORM
- SQLite Database
- JWT Authentication
- Bcrypt Password Hashing
- Pydantic Data Validation

### Frontend
- React 18 with TypeScript
- React Router
- Axios for API calls
- Framer Motion for animations
- Custom psychedelic CSS theme

## Project Structure

```
/
├── backend/                 # FastAPI backend
│   ├── main.py            # FastAPI app and routes
│   ├── database.py        # SQLAlchemy setup
│   ├── models.py          # Database models
│   ├── schemas.py         # Pydantic schemas
│   ├── auth.py            # JWT authentication
│   ├── requirements.txt   # Python dependencies
│   └── env.example       # Environment variables template
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── api/          # API client
│   │   └── styles/       # CSS theme
│   ├── package.json      # Node dependencies
│   └── env.example      # Environment variables template
└── README.md            # This file
```

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your SECRET_KEY and other settings
```

5. Run the development server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your API URL
```

4. Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login with email and password
- `GET /me` - Get current user data (requires authentication)
- `GET /newsletter` - Get all newsletter subscribers (admin only)

## Database Schema

### Users Table
- `id` - Primary key
- `name` - User's full name
- `age` - User's age
- `email` - User's email (unique)
- `hashed_password` - Bcrypt hashed password
- `phone` - Phone number (optional)
- `street` - Street address (optional)
- `city` - City (optional)
- `state` - State (optional)
- `zip` - ZIP code (optional)
- `country` - Country (optional)
- `is_subscribed` - Newsletter subscription status
- `is_admin` - Admin privileges
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

## Environment Variables

### Backend (.env)
```
SECRET_KEY=your-secret-key-here-change-this-in-production
ALGORITHM=HS256
DATABASE_URL=sqlite:///./wiseman_psychedelics.db
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

## Development

### Running Both Services

1. Start the backend:
```bash
cd backend
uvicorn main:app --reload
```

2. Start the frontend (in a new terminal):
```bash
cd frontend
npm start
```

### Creating an Admin User

To create an admin user, you can either:

1. Manually update the database:
```sql
UPDATE users SET is_admin = 1 WHERE email = 'your-email@example.com';
```

2. Or modify the registration endpoint temporarily to set `is_admin = True` for the first user.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
