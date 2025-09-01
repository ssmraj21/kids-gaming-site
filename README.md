# Kids Gaming Site

A modern, responsive website for kids aged 10-15 featuring interactive games, engaging content, and educational elements.

## 🎮 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Interactive Games**: Curated collection of age-appropriate games
- **Countdown Timer**: Exciting countdown to next game releases
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Modular Architecture**: JSON-driven content management

## 📁 Project Structure

```
kids-gaming-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with variables
├── scripts.js          # JavaScript functionality
├── data/
│   ├── branding.json   # Brand information and assets
│   ├── theme.json      # Color schemes and styling
│   └── games.json      # Games catalog and content
├── assets/
│   ├── images/         # Image assets
│   └── icons/          # Icon files
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or download** this project
2. **Open in VS Code**: `code kids-gaming-site`
3. **Start a local server**: Use Live Server extension or Python's built-in server
4. **Open in browser**: Navigate to `http://localhost:3000` (or your server port)

### Using Python Server
```bash
cd kids-gaming-site
python -m http.server 3000
```

### Using Node.js Server
```bash
cd kids-gaming-site
npx serve .
```

## 🎨 Customization

### Branding (`data/branding.json`)
The branding system drives the entire visual identity of the site:

- **Organization Details**: Name, website, contact information
- **Logo Integration**: Automatic favicon and header logo injection
- **Color Theming**: Primary and secondary colors override theme defaults
- **Social Media**: Automatic social link generation with platform icons
- **Contact Info**: Dynamic footer population with email and phone

**How it works**: The JavaScript automatically loads branding data and:
1. Updates the favicon with the provided favicon URL
2. Displays the organization logo in the header
3. Sets the organization name as the site title
4. Applies branding colors as CSS custom properties
5. Populates social media links in the footer
6. Updates contact information dynamically

### Theme (`data/theme.json`)
- Customize base color palette (overridden by branding colors)
- Update fonts and typography
- Modify shadows and border radius
- Control animation timing and easing

### Games (`data/games.json`)
- Add new games with metadata
- Update countdown target dates
- Modify site title and tagline

**Branding Integration**: Changes to `branding.json` reflect immediately on page reload. Students can experiment with different organizations by simply updating the JSON file.

## 📚 Learning Objectives

This project includes numerous `TODO: student exercise` comments for educational purposes:

### HTML/CSS Exercises
- [ ] Add hero background animations
- [ ] Create custom loading animations
- [ ] Implement dark mode toggle
- [ ] Design custom scrollbar styling

### JavaScript Exercises
- [ ] Build game search functionality
- [ ] Add difficulty-based filtering
- [ ] Create favorites system with localStorage
- [ ] Implement smooth scrolling navigation
- [ ] Add game rating system

### Advanced Features
- [ ] Integrate with real gaming APIs
- [ ] Add user authentication
- [ ] Create game progress tracking
- [ ] Build admin panel for content management

## 🔧 Technologies Used

- **HTML5**: Semantic markup with ARIA accessibility
- **CSS3**: Modern features including Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: ES6+ features, async/await, fetch API
- **JSON**: Data-driven content management

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Target Audience

- **Primary**: Kids aged 10-15
- **Secondary**: Parents and educators
- **Design Focus**: Large tap targets, bright colors, clear navigation

## 🔍 SEO & Performance

- Semantic HTML structure
- Optimized images with lazy loading
- Fast loading times
- Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

**Games not loading?**
- Check that JSON files are in the correct `data/` directory
- Ensure you're running a local server (not opening HTML directly)
- Check browser console for any error messages

**Styling issues?**
- Verify CSS file is linked correctly in `index.html`
- Check that CSS variables are properly defined in `:root`
- Ensure browser supports modern CSS features

**JavaScript errors?**
- Check that `scripts.js` is loaded after the DOM
- Verify JSON files have valid syntax
- Use browser developer tools to debug

---

Happy coding! 🎮✨
