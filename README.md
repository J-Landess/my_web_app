# Wiseman Psychedelics Web App

A full-stack web application for Wiseman Psychedelics featuring user registration, authentication, and consciousness research resources.

## 🌟 Features

- **User Management**: Registration, login, and profile management
- **Newsletter Subscription**: Optional newsletter signup with admin management
- **Consciousness Resources**: Curated YouTube videos and research links
- **Dark Psychedelic Theme**: Neon accents, rainbow gradients, and smooth animations
- **JWT Authentication**: Secure token-based authentication
- **Admin Panel**: Newsletter subscriber management
- **Error Handling**: Comprehensive error messages and validation
- **Responsive Design**: Mobile-friendly psychedelic interface

## 🚀 Live Demo

- **Frontend**: https://wiseman.vercel.app/
- **Backend API**: https://wiseman-api-gpfp.onrender.com/
- **API Documentation**: https://wiseman-api-gpfp.onrender.com/docs

## 🛠 Tech Stack

### Backend
- FastAPI (Python 3.11.9)
- SQLAlchemy ORM
- SQLite Database (production-ready)
- JWT Authentication
- Bcrypt Password Hashing
- Pydantic Data Validation
- CORS Middleware
- Rate Limiting

### Frontend
- React 18 with TypeScript
- Create React App (CRA)
- React Router v6
- Axios for API calls
- Framer Motion for animations
- Custom psychedelic CSS theme
- Error Boundaries
- Client-side validation

### Deployment
- **Frontend**: Vercel (auto-deploy from GitHub)
- **Backend**: Render (auto-deploy from GitHub)
- **Database**: SQLite (Render) / PostgreSQL ready
- **Domain**: Custom domain support

## 📁 Project Structure

```
/
├── backend/                 # FastAPI backend
│   ├── main.py            # FastAPI app and routes
│   ├── database.py        # SQLAlchemy setup
│   ├── models.py          # Database models
│   ├── schemas.py         # Pydantic schemas
│   ├── auth.py            # JWT authentication
│   ├── security.py        # Security utilities
│   ├── requirements.txt   # Python dependencies
│   ├── runtime.txt        # Python version (3.11.9)
│   ├── render.yaml        # Render deployment config
│   └── env.example       # Environment variables template
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── api/          # API client
│   │   ├── theme/        # Centralized theme
│   │   └── styles/       # CSS theme
│   ├── public/           # Static assets
│   ├── package.json      # Node dependencies
│   ├── vercel.json       # Vercel deployment config
│   └── env.example      # Environment variables template
├── DEPLOYMENT.md         # Production deployment guide
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.11.9+
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

## 🔗 API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login with email and password
- `GET /me` - Get current user data (requires authentication)
- `GET /newsletter` - Get all newsletter subscribers (admin only)
- `GET /docs` - Interactive API documentation

## 🗄️ Database Schema

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

## ⚙️ Environment Variables

### Backend (.env)
```
SECRET_KEY=your-secret-key-here-change-this-in-production
ALGORITHM=HS256
DATABASE_URL=sqlite:///./wiseman_psychedelics.db
ENVIRONMENT=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

## 🚀 Production Deployment

For production deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Deploy:**
- **Frontend**: Connect GitHub repo to Vercel
- **Backend**: Connect GitHub repo to Render
- **Database**: SQLite (Render) or PostgreSQL (Neon)

## 🛠️ Development

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

## 🐛 Troubleshooting

### Common Issues

**Registration fails:**
- Check CORS settings in backend
- Verify API URL in frontend environment
- Check browser console for specific errors

**Build failures:**
- Ensure Python 3.11.9 is installed
- Check requirements.txt dependencies
- Verify environment variables are set

**Deployment issues:**
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting
- Check Vercel/Render build logs
- Verify GitHub repository connection

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://reactjs.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
