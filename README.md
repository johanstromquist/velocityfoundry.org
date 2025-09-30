# Velocity Foundry Website

> Breakthrough Biotechs at Breakthrough Speed

This is the companion website for **The Velocity Framework** by Johan Strömquist.

## 🚀 Features

- **Velocity Assessment** - Interactive 15-question diagnostic (stored locally)
- **Free Tools & Templates** - No gates, no forms, just downloads
- **Book Content** - Foreword and Prologue available free
- **Blog** - Insights on organizational velocity
- **Interactive Calculators** - Compound advantage, committee costs, and more

## 📁 Project Structure

```
velocityfoundry.org/
├── index.html              # Homepage with parking lot test
├── assess.html             # Velocity assessment
├── tools.html              # Templates and calculators
├── book.html               # Book preview and purchase
├── blog.html               # Blog index
├── 404.html                # Error page
├── assets/
│   ├── css/
│   │   ├── style.css       # Core styles
│   │   ├── animations.css  # Animation definitions
│   │   ├── assessment.css  # Assessment page styles
│   │   ├── tools.css       # Tools page styles
│   │   ├── book.css        # Book page styles
│   │   └── blog.css        # Blog styles
│   ├── js/
│   │   ├── parking-lot.js  # Time-based messaging
│   │   ├── assessment-questions.js  # Assessment questions data
│   │   ├── assessment.js   # Assessment logic
│   │   ├── calculators.js  # Interactive calculators
│   │   └── blog-loader.js  # Blog post loader
│   ├── downloads/          # Template files (add your PDFs/Excel here)
│   └── images/             # Image assets
└── blog/
    ├── posts.js            # Blog post manifest
    └── post-template.html  # Template for new posts
```

## 🎨 Design System

### Colors
- **Navy** (#0A1128) - Primary brand color
- **Blue** (#00D9FF) - Accent and CTAs
- **Amber** (#FFA500) - Warnings and urgency
- **Green** (#00E676) - Success states

### Typography
- **Sans-serif** - System font stack (Inter-style)
- **Monospace** - SF Mono / Cascadia Code for code/data

## 📝 Adding Content

### Adding a Blog Post

1. Copy `blog/post-template.html` to `blog/2025-01-your-post.html`
2. Edit the content in your new file
3. Add entry to `blog/posts.js`:

```javascript
{
    slug: '2025-01-your-post',
    title: 'Your Post Title',
    date: '2025-01-15',
    excerpt: 'Brief description...',
    readTime: '5 min'
}
```

4. Commit and push - GitHub Pages will deploy automatically

### Adding Tools/Templates

1. Add files to `assets/downloads/`
2. Update links in `tools.html`
3. Commit and push

## 🖼️ Image Placeholders

The following sections need images added:

- **Homepage hero** (`index.html`) - Empty parking lot at 5:30 PM
- **Book cover** (`book.html`) - The Velocity Framework book cover

Search for "PLACEHOLDER" comments in the HTML files to find exact locations.

## 🚢 Deployment

This site is designed for GitHub Pages:

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch / root directory
4. Optional: Add custom domain (CNAME file)

## 🛠️ Local Development

No build process required! Just open `index.html` in a browser.

For a local server (optional):
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## 📊 Assessment Storage

The velocity assessment uses localStorage to save:
- User answers (`velocity_assessment`)
- Results (`velocity_results`)

All data stays in the browser - no server-side storage.

## ⚡ Performance

- No external dependencies
- Minimal CSS/JS (~50KB total)
- All animations GPU-accelerated
- Lazy-loaded where possible
- Target: <1s load time

## 🎯 Key Features

### Separation of Concerns
- One CSS file per page/feature
- One JS file per responsibility
- No mixing of styles and logic

### Accessibility
- Semantic HTML throughout
- Proper ARIA labels
- Keyboard navigation support
- Respects prefers-reduced-motion

### Mobile-First
- Responsive design
- Touch-friendly targets
- Readable on all devices

## 📦 Dependencies

**None!** Pure HTML, CSS, and vanilla JavaScript.

## 📄 License

Copyright © 2025 Johan Strömquist. All rights reserved.

## 🤝 Contributing

This is a personal project, but feedback is welcome via issues or pull requests.

## 📞 Contact

**Johan Strömquist**
- Email: johan.stromquist@ssistrategy.com
- LinkedIn: linkedin.com/in/johanstromquist

---

*Transform faster. Deliver sooner. Live better.*