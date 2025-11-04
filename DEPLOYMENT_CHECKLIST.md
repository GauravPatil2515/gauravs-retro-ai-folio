# 🎯 Netlify Deployment Checklist

Use this checklist before deploying to Netlify to ensure everything is ready.

## ✅ Pre-Deployment Checklist

### Files & Configuration
- [x] `netlify.toml` exists in root directory
- [x] `.nvmrc` file specifies Node 18
- [x] `public/_redirects` file configured for SPA routing
- [x] `.gitignore` properly excludes node_modules and dist
- [x] Production build tested (`npm run build`)
- [x] Build output is ~0.39 MB (optimized)

### Content Review
- [ ] Update GitHub/LinkedIn URLs in `src/pages/Index.tsx`
- [ ] Replace placeholder icons with actual project images (optional)
- [ ] Add your actual resume PDF link
- [ ] Verify all email links point to: gauravpatil2516@gmail.com
- [ ] Update meta tags in `index.html` (optional)

### Testing
- [x] Local dev server works (`npm run dev`)
- [x] Production build succeeds (`npm run build`)
- [ ] Preview build locally (`npm run preview`)
- [ ] Test all navigation links
- [ ] Test scroll behavior
- [ ] Test mobile responsiveness
- [ ] Check all sections render correctly

### Repository Setup
- [ ] Push all changes to GitHub:
  ```bash
  git add .
  git commit -m "Portfolio ready for deployment"
  git push origin main
  ```

## 🚀 Deployment Steps

### Option 1: Git Integration (Recommended)

1. **Login to Netlify**
   - Go to https://app.netlify.com
   - Sign up/login with GitHub

2. **Import Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `gauravs-retro-ai-folio` repository

3. **Configure Build (Auto-detected)**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Wait for Deployment**
   - First deploy takes ~2-3 minutes
   - You'll get a URL like: `random-name-123456.netlify.app`

### Option 2: Netlify CLI

```bash
# Install CLI globally
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Post-Deployment Tasks

### Immediate
- [ ] Visit your live URL and test thoroughly
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test all external links
- [ ] Check browser console for errors

### Optional Enhancements
- [ ] Add custom domain
- [ ] Set up form handling (if you add a contact form)
- [ ] Configure environment variables (if needed)
- [ ] Enable Netlify Analytics
- [ ] Set up deploy notifications

## 🔧 Custom Domain Setup (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., gauravpatil.dev)
4. Follow DNS configuration instructions:
   - Add A record or CNAME record
   - Wait for DNS propagation (up to 48 hours)
5. Enable HTTPS (automatic with Netlify)

## 📊 Performance Optimization

Already Configured:
- ✅ Asset caching (1 year for static assets)
- ✅ Security headers (XSS, Frame Options, etc.)
- ✅ Gzip compression
- ✅ Optimized build (~390 KB)

Optional:
- [ ] Enable Netlify Image CDN
- [ ] Add preload hints for fonts
- [ ] Configure asset optimization

## 🐛 Common Issues & Solutions

### Build Fails
**Error**: "Command failed with exit code 1"
- Check Node version matches (18+)
- Clear cache and rebuild: `npm run build`
- Check build logs in Netlify dashboard

### Routing Issues
**Error**: "Page not found" on refresh
- Ensure `_redirects` file is in `public/` folder
- Check netlify.toml has redirect rules

### Missing Assets
**Error**: Images/fonts not loading
- Use absolute paths starting with `/`
- Ensure files are in `public/` or properly imported

### Slow Build Times
- Check for unnecessary dependencies
- Review build logs for warnings
- Consider build plugins if needed

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Community**: https://answers.netlify.com
- **Vite Docs**: https://vitejs.dev/guide/

## 🎉 Success!

Once deployed, share your portfolio:
- Add URL to GitHub repository description
- Update LinkedIn profile
- Share on social media
- Add to resume

**Your live site**: `https://your-site-name.netlify.app`

---

**Last Updated**: November 4, 2025
