# 🚀 Wiseman Psychedelics - Production Deployment Guide

Complete guide to deploy your psychedelic consciousness research platform to production using free hosting services.

## 📋 Overview

This guide will help you deploy:
- **Frontend (React)**: Vercel (free tier)
- **Backend (FastAPI)**: Render (free tier) 
- **Database**: PostgreSQL via Neon (free tier)
- **Total Cost**: $0/month + optional domain ($10/year)

## 🎯 Prerequisites

- GitHub repository with your code
- Vercel account (free)
- Render account (free)
- Neon account (free)
- Optional: Domain name

## 🚀 Step 1: Deploy Frontend to Vercel

### 1.1 Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → "Continue with GitHub"
3. Authorize Vercel to access your repositories

### 1.2 Deploy Your App
1. Click "New Project"
2. Click "Import Git Repository"
3. Select your `my_web_app` repository
4. **Important**: Set "Root Directory" to `frontend`
5. Click "Deploy"

### 1.3 Configure Environment Variables
In Vercel dashboard:
1. Go to your project → Settings → Environment Variables
2. Add: `REACT_APP_API_URL` = `https://your-render-url.onrender.com`
3. Redeploy (or it auto-redeploys)

**You'll get a URL like:** `https://my-web-app-xyz.vercel.app`

## 🗄️ Step 2: Set Up Database (Neon PostgreSQL)

### 2.1 Create Neon Account
1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub
3. Create a new project
4. Choose a region close to you

### 2.2 Get Connection String
1. Copy the connection string (looks like: `postgresql://user:pass@host/dbname`)
2. Save this for Render configuration

## ⚙️ Step 3: Deploy Backend to Render

### 3.1 Sign Up for Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render to access your repositories

### 3.2 Create Web Service
1. Click "New +" → "Web Service"
2. Connect your `my_web_app` repository
3. **Root Directory**: `backend`
4. **Runtime**: Python 3
5. **Build Command**: `pip install -r requirements.txt`
6. **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### 3.3 Configure Environment Variables
Add these in Render dashboard:
```
SECRET_KEY=your-super-secret-key-here-64-chars-minimum
ALGORITHM=HS256
DATABASE_URL=postgresql://user:pass@host/dbname
ENVIRONMENT=production
FRONTEND_URL=https://your-vercel-url.vercel.app
TRUSTED_HOSTS=your-domain.com,api.your-domain.com
```

### 3.4 Deploy
1. Click "Create Web Service"
2. Wait 5-10 minutes for deployment
3. **You'll get a URL like:** `https://wiseman-api.onrender.com`

## 🔗 Step 4: Connect Frontend to Backend

### 4.1 Update Vercel Environment
1. Go to Vercel dashboard
2. Settings → Environment Variables
3. Update `REACT_APP_API_URL` with your Render URL
4. Redeploy

### 4.2 Test the Connection
1. Visit your Vercel URL
2. Try registering a new account
3. Try logging in
4. Navigate through all pages

## 🌐 Step 5: Custom Domain (Optional)

### 5.1 Purchase Domain
- Recommended: [Namecheap](https://namecheap.com) (~$10/year)
- Or: [Google Domains](https://domains.google)

### 5.2 Configure Vercel Domain
1. Vercel dashboard → Domains
2. Add your domain
3. Follow DNS instructions

### 5.3 Configure Render Domain
1. Render dashboard → Settings → Custom Domains
2. Add `api.yourdomain.com`
3. Update DNS records

### 5.4 Update Environment Variables
Update both Vercel and Render with new domain URLs.

## 🔧 Step 6: Generate Production SECRET_KEY

### 6.1 Generate Secure Key
```bash
cd backend
python generate_secret_key.py
```

### 6.2 Update Render Environment
1. Copy one of the generated keys
2. Update `SECRET_KEY` in Render dashboard
3. Redeploy backend

## 📊 Step 7: Monitoring & Analytics

### 7.1 Error Monitoring (Optional)
1. Sign up for [Sentry](https://sentry.io) (free tier)
2. Add to both frontend and backend
3. Get error alerts

### 7.2 Analytics (Optional)
1. Add [Google Analytics](https://analytics.google.com)
2. Or use [Plausible](https://plausible.io) (privacy-focused)

## 🧪 Step 8: Testing Your Deployment

### 8.1 Frontend Tests
- [ ] Login page loads
- [ ] Registration works
- [ ] Psychedelic effects appear after login
- [ ] All pages navigate correctly
- [ ] Mobile responsive

### 8.2 Backend Tests
- [ ] API responds at `/`
- [ ] Registration endpoint works
- [ ] Login endpoint works
- [ ] Protected routes require auth
- [ ] CORS allows frontend requests

### 8.3 Integration Tests
- [ ] Register → Login → Navigate flow
- [ ] Newsletter subscription works
- [ ] Logout redirects properly
- [ ] All API calls succeed

## 🚨 Troubleshooting

### Common Issues

**Frontend not loading:**
- Check Vercel build logs
- Verify Root Directory is `frontend`
- Check environment variables

**Backend 500 errors:**
- Check Render logs
- Verify all environment variables
- Check database connection

**CORS errors:**
- Update `FRONTEND_URL` in Render
- Check CORS origins in security.py

**Database errors:**
- Verify Neon connection string
- Check if database exists
- Run migrations if needed

### Getting Help

1. **Vercel**: Check build logs in dashboard
2. **Render**: Check service logs in dashboard  
3. **Neon**: Check connection in dashboard
4. **GitHub**: Check if code is up to date

## 📈 Performance Optimization

### Frontend
- Images are optimized automatically by Vercel
- Bundle is minified and compressed
- CDN serves static assets globally

### Backend
- Render handles scaling automatically
- Database connection pooling via Neon
- Rate limiting prevents abuse

## 🔒 Security Features

### Implemented
- ✅ Rate limiting (5/min register, 10/min login)
- ✅ Security headers (XSS, CSRF protection)
- ✅ CORS configuration
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Input validation
- ✅ SQL injection prevention

### Production Checklist
- [ ] Strong SECRET_KEY (64+ characters)
- [ ] HTTPS enforced
- [ ] Environment variables secure
- [ ] Database credentials protected
- [ ] Regular security updates

## 💰 Cost Breakdown

### Free Tier Limits
- **Vercel**: 100GB bandwidth/month
- **Render**: Sleeps after 15 min inactivity
- **Neon**: 500MB storage, 1 database

### When to Upgrade
- **Vercel Pro** ($20/month): >100GB bandwidth
- **Render Starter** ($7/month): 24/7 uptime needed
- **Neon Pro** ($19/month): >500MB database

**You can likely run free for 6-12 months!**

## 🎉 Success!

Your psychedelic consciousness research platform is now live! 

**Next Steps:**
1. Share your URL with friends
2. Monitor usage in dashboards
3. Gather user feedback
4. Add new features
5. Consider paid tiers when you hit limits

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Neon Docs**: [neon.tech/docs](https://neon.tech/docs)

---

**Happy Deploying! 🚀✨**

*Built with ❤️ for consciousness research and psychedelic education*
