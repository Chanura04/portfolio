# Chanura Karunanayake - Portfolio Website

A modern, responsive portfolio website showcasing AI and Data Science projects.

## Features

- 🎨 Modern, elegant design with smooth animations
- 📱 Fully responsive across all devices
- 🚀 Fast loading and optimized performance
- 🎯 Clean, organized project showcase
- 💼 Professional presentation of skills and experience

## Technologies Used

- HTML5
- CSS3 (with custom animations)
- JavaScript (Vanilla)
- Google Fonts (Playfair Display & DM Sans)

## Local Development

1. Clone this repository:
```bash
git clone https://github.com/Chanura04/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### Method 1: Via GitHub Website

1. Create a new repository called `portfolio` (or any name you prefer)
2. Upload all files (index.html, styles.css, script.js, README.md)
3. Go to repository Settings > Pages
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be published at: `https://chanura04.github.io/portfolio/`

### Method 2: Via Git Command Line

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub named `portfolio`

3. Push to GitHub:
```bash
git remote add origin https://github.com/Chanura04/portfolio.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Select "main" branch as source
   - Save and wait for deployment

### Method 3: Using GitHub Username Repository (Recommended)

For a cleaner URL (`https://chanura04.github.io/`):

1. Create a repository named exactly: `Chanura04.github.io`
2. Push your files to this repository
3. GitHub Pages will automatically deploy
4. Your site will be available at: `https://chanura04.github.io/`

## Customization

### Update Projects
Edit the project cards in `index.html` under the `<!-- Projects Section -->` to add or modify projects.

### Change Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary: #0a0e27;
    --accent: #4a9eff;
    /* ... other colors */
}
```

### Update Contact Information
Edit the contact links in the `<!-- Contact Section -->` of `index.html`.

## Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript interactions
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Chanura Karunanayake**
- Email: karunanayake.cm@gmail.com
- GitHub: [@Chanura04](https://github.com/Chanura04)
- Phone: +94 77 267 6406

---

Built with ❤️ for showcasing AI and Data Science projects
