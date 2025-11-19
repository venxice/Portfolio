# 🎨 Venice Don - Creative Portfolio

> A modern, responsive portfolio website showcasing creative design and full-stack development skills with smooth animations and interactive elements.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://venicedon.netlify.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

### Core Functionality
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode** - Toggle between light and dark themes with persistent preferences
- **Downloadable Resume** - Generate and download professional resume in Harvard format (PDF)
- **Contact Form** - Integrated form with validation and Web3Forms API
- **Project Showcase** - Interactive bento grid layout with project filtering
- **Smooth Animations** - Scroll-triggered animations and interactive hover effects

### Technical Highlights
- **Semantic HTML5** - Proper use of semantic tags for better SEO and accessibility
- **Modern CSS** - CSS custom properties, flexbox, grid, and modern animations
- **Vanilla JavaScript** - No framework dependencies, optimized performance
- **Accessibility** - WCAG 2.1 compliant with ARIA labels and keyboard navigation
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- **Performance** - Optimized loading with DNS prefetch and preconnect

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/venxice/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **Or use a local server** (recommended)
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Using PHP
   php -S localhost:8000
   ```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Styles and animations
├── script.js               # Interactive functionality
├── assets/
│   └── images/            # Image assets
├── README.md              # Project documentation
└── SETUP.md               # Setup instructions
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality

### Libraries & Services
- **jsPDF** - PDF generation for resume download
- **Web3Forms** - Contact form submission
- **Google Fonts** - Inter & Space Grotesk typefaces

### Development Tools
- **Git** - Version control
- **Netlify** - Deployment and hosting

## 🎨 Customization

### Update Personal Information

1. **Resume Data** - Edit `script.js` (lines 528-581)
   ```javascript
   const resumeData = {
       name: 'YOUR NAME',
       contact: {
           email: 'your.email@example.com',
           // ... other contact info
       },
       // ... rest of your data
   };
   ```

2. **Projects** - Edit the bento grid items in `index.html`

3. **Colors** - Modify CSS variables in `style.css`
   ```css
   :root {
       --primary: #000000;
       --secondary: #6366f1;
       /* ... other colors */
   }
   ```

4. **Meta Tags** - Update SEO information in `index.html` head section

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Reduced motion support for users with preferences
- High contrast ratios for text
- Focus indicators for interactive elements

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings (none needed for static site)
4. Deploy!

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select branch and folder
4. Save and wait for deployment

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- No render-blocking resources

## 🔒 Security

- No sensitive data in frontend code
- Contact form uses secure API
- External links use `rel="noopener noreferrer"`
- No inline JavaScript (CSP-friendly)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Venice Don**
- Portfolio: [venicedon.netlify.app](https://venicedon.netlify.app)
- GitHub: [@venxice](https://github.com/venxice)
- Email: venicedon17@gmail.com
- Instagram: [@venicedon](https://instagram.com/venicedon)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons/Feather Icons
- Fonts from Google Fonts
- Color gradients inspired by uiGradients

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/venxice/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ and ☕ by Venice Don
