# 🌿 KushSavvy - Cannabis Product Identifier

A mobile-friendly Progressive Web App that works like Shazam for cannabis products. Take a photo of any cannabis product packaging to instantly identify it and see reviews, details, and more.

## Features

- 📸 **Camera Integration** - Use your phone's camera to capture product packaging
- 🖼️ **Image Upload** - Alternative option to upload existing photos
- 🔍 **OCR Technology** - Powered by Tesseract.js for text extraction
- 📊 **Product Database** - Comprehensive database with strain information
- ⭐ **Reviews & Ratings** - Real user reviews and ratings
- 📱 **Mobile-First Design** - Optimized for mobile devices
- 🚀 **Progressive Web App** - Install on your home screen for native app experience
- 💨 **Offline Support** - Service worker caching for offline functionality

## How It Works

1. **Take/Upload Photo** - Capture or upload an image of cannabis product packaging
2. **OCR Processing** - The app extracts text from the image using Tesseract.js
3. **Product Matching** - Extracted text is matched against the product database
4. **View Results** - See detailed product information, effects, flavors, and reviews

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **OCR**: Tesseract.js v5
- **PWA**: Service Worker API, Web App Manifest
- **Camera**: MediaDevices API
- **Responsive**: Mobile-first CSS with Flexbox

## Product Database

Currently includes 8 popular strains:
- Blue Dream (Hybrid)
- Gelato #33 (Indica)
- Sour Diesel (Sativa)
- OG Kush (Hybrid)
- Purple Punch (Indica)
- Wedding Cake (Hybrid)
- Jack Herer (Sativa)
- Granddaddy Purple (Indica)

Each product includes:
- Strain name and brand
- Type (Sativa/Indica/Hybrid)
- THC/CBD percentages
- Price
- Description
- Effects and flavors
- User reviews and ratings

## Installation

### Local Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/kushsavvy.git
cd kushsavvy
```

2. Serve the files using any local web server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open in browser
```
http://localhost:8000
```

### PWA Installation

On mobile devices:
1. Open the app in your mobile browser
2. Look for "Add to Home Screen" prompt
3. Install and launch from your home screen

## Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Safari (iOS 11+)
- ✅ Firefox
- ✅ Samsung Internet

**Note**: Camera features require HTTPS in production.

## Future Enhancements

- [ ] Integration with real cannabis product APIs (Leafly, Weedmaps)
- [ ] User accounts and saved favorites
- [ ] Nearby dispensary finder
- [ ] Price comparison across dispensaries
- [ ] Advanced image recognition with AI/ML
- [ ] Barcode/QR code scanning
- [ ] Social features - share reviews
- [ ] Push notifications for deals
- [ ] Dark mode toggle

## Privacy & Legal

- This app is for educational and informational purposes only
- Must be 21+ to use
- Complies with local cannabis laws
- No personal data is collected or stored
- All processing happens client-side

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning and development.

## Disclaimer

This app is not affiliated with any cannabis brand or dispensary. Product information is for demonstration purposes. Always verify product details with the manufacturer or dispensary. Use responsibly and in accordance with local laws.

---

**Made with 🌿 for the cannabis community**
