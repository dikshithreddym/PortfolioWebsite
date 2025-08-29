# Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

### Step 3: Configure Build Settings
Vercel should auto-detect the settings, but verify:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 4: Environment Variables (Optional)
If you plan to use email functionality, add these environment variables:
- `EMAIL_SERVICE_API_KEY` - Your email service API key
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email address

### Step 5: Deploy
1. Click "Deploy"
2. Vercel will build and deploy your site
3. You'll get a preview URL (e.g., `https://your-project.vercel.app`)

### Step 6: Custom Domain (Optional)
1. In your Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## 🔧 Post-Deployment

### Update Content
1. Edit files in `/content/` directory
2. Push changes to GitHub
3. Vercel will automatically redeploy

### Monitor Performance
- Check Vercel Analytics in your dashboard
- Monitor Core Web Vitals
- Review build logs for any issues

### SEO Setup
1. Update `app/layout.tsx` with your actual domain
2. Generate and submit sitemap to search engines
3. Set up Google Search Console

## 🐛 Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### Performance Issues
- Run `npm run analyze` to check bundle size
- Optimize images using Next.js Image component
- Consider code splitting for large components

### Contact Form Issues
- Check Vercel function logs
- Verify API route is working
- Test email service configuration

## 📊 Performance Targets

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

- All API routes are serverless functions
- Contact form has honeypot protection
- No sensitive data in client-side code
- HTTPS enforced by Vercel

## 📈 Analytics

Vercel Analytics is included by default. To view:
1. Go to your Vercel dashboard
2. Navigate to "Analytics" tab
3. View page views, performance metrics, and more
