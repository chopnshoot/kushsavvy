# Deployment Guide

## Quick Deploy Options

### 1. GitHub Pages (Recommended for Demo)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Select folder (root `/`)
5. Save and wait for deployment

Your app will be available at: `https://yourusername.github.io/kushsavvy`

**Note**: GitHub Pages uses HTTPS by default, which is required for camera access.

### 2. Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"

**Automatic HTTPS** is provided by default.

### 3. Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Click "Deploy"

**Automatic HTTPS** is provided by default.

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Deploy:
```bash
firebase deploy
```

### 5. Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Configure build:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy

## Environment Requirements

- **HTTPS Required**: Camera API requires HTTPS in production
- **Browser Support**: Modern browsers with MediaDevices API support
- **No Backend Required**: This is a static site with client-side processing

## Custom Domain Setup

### GitHub Pages
1. Add `CNAME` file with your domain
2. Configure DNS:
   - Type: CNAME
   - Name: www (or @)
   - Value: yourusername.github.io

### Netlify/Vercel/Cloudflare
1. Go to Domain settings
2. Add your custom domain
3. Follow DNS configuration instructions

## Performance Optimization

### 1. Enable Gzip Compression
Add to server configuration or use hosting platform's built-in compression.

### 2. CDN Configuration
Most platforms (Netlify, Vercel, Cloudflare) include CDN by default.

### 3. Cache Headers
Recommended headers:
```
Cache-Control: public, max-age=31536000, immutable (for static assets)
Cache-Control: no-cache (for HTML)
```

### 4. Image Optimization
Replace SVG placeholders with optimized PNG icons:
- Use tools like TinyPNG or Squoosh
- Generate multiple sizes (192x192, 512x512)
- Use WebP format where supported

## PWA Checklist

- [x] manifest.json configured
- [x] Service worker registered
- [x] HTTPS enabled
- [ ] Generate actual PNG icons (replace SVG placeholders)
- [x] Theme color set
- [x] Start URL configured

## Testing After Deployment

1. **Camera Access**: Test on mobile device
2. **PWA Install**: Check "Add to Home Screen" prompt
3. **Offline Mode**: Disable network and test caching
4. **Responsive Design**: Test on various screen sizes
5. **Performance**: Use Lighthouse audit

## Production Checklist

- [ ] Test all features on HTTPS
- [ ] Verify camera permissions work
- [ ] Test PWA installation on iOS and Android
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test offline functionality
- [ ] Verify service worker updates
- [ ] Test on multiple browsers
- [ ] Add analytics (optional)
- [ ] Set up error monitoring (optional)

## Monitoring

### Google Analytics (Optional)
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Camera Not Working
- Ensure site is served over HTTPS
- Check browser permissions
- Verify MediaDevices API support

### PWA Not Installing
- Verify manifest.json is accessible
- Check service worker registration
- Ensure HTTPS is enabled
- Test on supported browsers

### Service Worker Not Updating
- Increment version in service-worker.js
- Hard refresh browser (Ctrl+Shift+R)
- Unregister old service worker in DevTools

## Support

For issues and questions:
- Open an issue on GitHub
- Check browser console for errors
- Test in incognito/private mode
