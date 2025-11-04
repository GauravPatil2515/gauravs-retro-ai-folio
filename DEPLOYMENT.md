# 🚀 Netlify Deployment Guide

This portfolio is ready to be deployed on Netlify! Follow these steps to get your site live.

## 📋 Pre-Deployment Checklist

✅ `netlify.toml` - Netlify configuration file created
✅ `.nvmrc` - Node version specified (v18)
✅ `public/_redirects` - SPA routing configured
✅ Production build tested and working
✅ All dependencies installed

## 🌐 Deploy to Netlify

### Option 1: Deploy via Git (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Make portfolio Netlify-ready"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `gauravs-retro-ai-folio` repository

3. **Configure build settings** (should auto-detect from netlify.toml):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

### Option 2: Manual Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Drag & Drop Deploy

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `dist` folder to the upload area

## ⚙️ Configuration Details

### Build Settings (from netlify.toml)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (specified in .nvmrc)

### Features Configured
- ✅ **SPA Routing** - All routes redirect to index.html
- ✅ **Security Headers** - X-Frame-Options, XSS Protection, etc.
- ✅ **Asset Caching** - Static assets cached for 1 year
- ✅ **Environment Variables** - Ready for production

## 🔧 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## 📊 Build & Preview Commands

```bash
# Development server
npm run dev

# Production build (what Netlify runs)
npm run build

# Preview production build locally
npm run preview
```

## 🐛 Troubleshooting

### Build fails on Netlify:
- Check the build logs in Netlify dashboard
- Ensure Node version matches (18+)
- Verify all dependencies are in package.json

### Routing doesn't work:
- Ensure `_redirects` file is in the `public` folder
- Check netlify.toml has the redirect rules

### Images/Assets not loading:
- Use relative paths (starting with `/`)
- Ensure assets are in the `public` folder or imported properly

## 🎉 Post-Deployment

After successful deployment:
- Test all pages and navigation
- Check mobile responsiveness
- Verify contact links work
- Test scroll animations
- Check console for any errors

Your site will be live at: `https://your-site-name.netlify.app`

## 📝 Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables (prefix with `VITE_` for Vite apps)
3. Trigger a new deploy

---

**Need help?** Check Netlify docs: https://docs.netlify.com/
