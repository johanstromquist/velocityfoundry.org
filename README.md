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
│   ├── downloads/          # Template PDFs and Excel files (all included)
│   └── images/             # Hero images, blog images, book cover
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

1. Copy `blog/post-template.html` to `blog/YYYY-MM-your-post.html`
2. Edit the content in your new file
3. Add a hero image to `assets/images/` (optional)
4. Add entry to `blog/posts.js`:

```javascript
{
    slug: 'YYYY-MM-your-post',
    title: 'Your Post Title',
    date: 'YYYY-MM-DD',
    excerpt: 'Brief description...',
    readTime: '5 min',
    image: 'assets/images/your-image.jpg'  // optional
}
```

5. Commit and push - GitHub Pages will deploy automatically

**Current blog posts:** 5 published articles on organizational velocity

### Adding Tools/Templates

1. Add files to `assets/downloads/`
2. Update links in `tools.html`
3. Commit and push

## 🖼️ Images

All images are in place:

- **Homepage hero** (`index.html`) - Empty parking lot at golden hour
- **Book cover** (`book.html`) - The Velocity Framework cover
- **Blog hero images** - Featured images for all blog posts
- **Blog card images** - Thumbnail images for blog listing

## 🚢 Deployment

**Status: Live at https://velocityfoundry.org/** 🚀

Deployed via GitHub Pages:
- Repository: https://github.com/johanstromquist/velocityfoundry.org
- Branch: main (root directory)
- Custom domain: velocityfoundry.org
- DNS: Configured via Network Solutions
- HTTPS: Available (enforce via GitHub Pages settings)

To deploy changes:
1. Make edits locally
2. Commit: `git add . && git commit -m "Description"`
3. Push: `git push`
4. GitHub Pages auto-deploys (1-2 minutes)

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