# Quick Start Guide

## Getting Your Site Live in 5 Minutes

### Step 1: Initial Setup (1 minute)

1. Create a new GitHub repository named `velocityfoundry.org`
2. Push this directory to the repository:

```bash
cd /path/to/velocityfoundry.org
git init
git add .
git commit -m "Initial commit: Velocity Foundry website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/velocityfoundry.org.git
git push -u origin main
```

### Step 2: Enable GitHub Pages (1 minute)

1. Go to repository Settings → Pages
2. Under "Source", select "main" branch and "/" (root)
3. Click Save
4. Wait 1-2 minutes for deployment

Your site will be live at `https://YOUR_USERNAME.github.io/velocityfoundry.org/`

### Step 3: Add Custom Domain (Optional, 2 minutes)

1. In your domain registrar (e.g., Namecheap, GoDaddy):
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. In GitHub Pages settings:
   - Enter `velocityfoundry.org` in "Custom domain"
   - Enable "Enforce HTTPS" (after DNS propagates)

### Step 4: Add Essential Content (Before Launch)

#### 1. Replace Image Placeholders

Add these images to `assets/images/`:
- `parking-lot-empty.jpg` - Empty parking lot at golden hour
- `book-cover.jpg` - The Velocity Framework cover

Then update the CSS/HTML:
- Search for "PLACEHOLDER" comments in HTML files
- Update background-image URLs

#### 2. Add Download Files

Create and add to `assets/downloads/`:
- Rock Planning Canvas (Excel & PDF)
- Activity Chart Template (Excel & PDF)
- Velocity Assessment PDF
- Alignment Pulse PDF
- Solve Forever Worksheet (Excel & PDF)
- The Number Template (Excel & PDF)

See `assets/downloads/README.md` for details.

#### 3. Update Amazon Link

In `book.html`, replace `#` with actual Amazon URL:
```html
<a href="YOUR_AMAZON_URL_HERE" class="cta-primary large">Buy on Amazon →</a>
```

## Testing Locally

Open `index.html` in a browser, or run a local server:

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## Adding Your First Blog Post

1. Copy the template:
```bash
cp blog/post-template.html blog/2025-01-my-first-post.html
```

2. Edit the new file - update date, title, and content

3. Add to `blog/posts.js`:
```javascript
const posts = [
    {
        slug: '2025-01-my-first-post',
        title: 'My First Post',
        date: '2025-01-15',
        excerpt: 'A brief description of the post...',
        readTime: '5 min'
    }
];
```

4. Commit and push:
```bash
git add .
git commit -m "Add first blog post"
git push
```

## Troubleshooting

### Site not loading after enabling Pages
- Wait 2-3 minutes for first deployment
- Check Settings → Pages for deployment status
- Clear browser cache

### Custom domain not working
- DNS propagation can take up to 48 hours
- Verify DNS records with `dig velocityfoundry.org`
- Ensure CNAME file exists in repository root

### Assessment not saving
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser

### Downloads giving 404
- Files must exist in `assets/downloads/`
- Check filename spelling matches HTML links
- Wait for GitHub Pages to redeploy (1-2 minutes)

## Performance Checklist

Before launch, verify:
- [ ] All images are optimized (use TinyPNG or similar)
- [ ] No console errors in browser dev tools
- [ ] Test on mobile device
- [ ] Assessment completes and shows results
- [ ] All navigation links work
- [ ] 404 page displays correctly
- [ ] Site loads in <2 seconds

## Post-Launch

### Monitor
- GitHub Pages deployment status
- Google Search Console (add property)
- User feedback via email

### Update Schedule
- Blog: Monthly minimum
- Tools: As needed
- Assessment: Annually (update benchmarks)

## Need Help?

Check the main README.md for more details, or:
- GitHub Issues: Report bugs or request features
- Email: johan.stromquist@ssistrategy.com

---

**You're ready to launch!** 🚀

The site is complete, tested, and ready for deployment.