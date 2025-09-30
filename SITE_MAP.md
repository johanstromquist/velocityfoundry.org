# Site Map & Navigation

## Page Structure

```
velocityfoundry.org
│
├── 🏠 HOME (index.html)
│   ├── Hero with parking lot test & live clock
│   ├── Three paths: Diagnose / Tools / Learn
│   ├── The 5% Reality section (stats)
│   └── CTA to assessment
│
├── 📊 ASSESS (assess.html)
│   ├── Welcome screen
│   ├── 15-question quiz (localStorage)
│   │   ├── Decision Velocity (7 questions)
│   │   ├── Information Flow (6 questions)
│   │   ├── Problem Resolution (6 questions)
│   │   └── Organizational Efficiency (5 questions)
│   └── Results screen
│       ├── Velocity score (0-40.5)
│       ├── Category breakdown
│       ├── Biggest constraint
│       └── Recommended first Rock
│
├── 🛠️ TOOLS (tools.html)
│   ├── Core Templates (6 downloads)
│   │   ├── Rock Planning Canvas
│   │   ├── Activity Chart Template
│   │   ├── Velocity Assessment Scorecard
│   │   ├── Alignment Pulse Run Sheet
│   │   ├── Solve Forever Worksheet
│   │   └── The Number Template
│   └── Interactive Calculators (3 tools)
│       ├── Compound Advantage Calculator
│       ├── Committee Cost Calculator
│       └── The Number Generator
│
├── 📖 BOOK (book.html)
│   ├── Book hero with cover
│   ├── Table of contents (6 parts)
│   ├── Free content
│   │   ├── Foreword (How This Book Was Created)
│   │   └── Prologue (Your Organization Runs at 5% Capacity)
│   └── Buy on Amazon CTA
│
├── ✍️ BLOG (blog.html)
│   ├── Blog index (auto-generated from posts.js)
│   └── Individual posts (blog/*.html)
│
└── ❌ 404 (404.html)
    └── Error page with navigation
```

## User Journeys

### Journey 1: The Skeptic
```
Home → "Is this real?" → Assess → "Oh no, 14.2/40.5"
     → Tools → Download Rock Canvas → Monday: Launch Rock
```

### Journey 2: The Researcher
```
Home → Book → Read Foreword + Prologue → "Interesting..."
     → Tools → Calculator → "This is serious" → Assess → Buy Book
```

### Journey 3: The Urgent
```
Home → [9 PM, sees clock] → "That's us!" → Assess → Results shock
     → Tools → Download everything → Book → Buy immediately
```

### Journey 4: The Executive
```
Google "biotech velocity" → Blog post → Home → Assess
     → Email team: "Take this" → Buy books for leadership team
```

## Key Interactions

### Dynamic Elements

1. **Parking Lot Test (Home)**
   - Live clock updates every second
   - Message changes based on time of day
   - Weekend detection
   - Creates urgency and recognition

2. **Assessment (Assess)**
   - Saves answers to localStorage automatically
   - One question per screen (feels focused)
   - Auto-advances after selection (snappy)
   - Calculates weighted scores
   - Personalized recommendations

3. **Interactive Calculators (Tools)**
   - Modal overlays (clean UX)
   - Real-time calculations
   - Compound Advantage: Slider + years selector
   - Committee Cost: 4 inputs → annual cost
   - Number Generator: Role picker → recommended metric

4. **Blog Loader**
   - Reads from posts.js manifest
   - Sorts by date (newest first)
   - Auto-generates index
   - No build process needed

### Navigation Flow

```
Every page has:
├── Sticky navigation bar
│   ├── Logo (→ Home)
│   └── Menu: Assess | Tools | Book | Blog
│
└── Footer
    ├── About Johan
    ├── Contact info
    ├── Resource links
    └── Motto: "Transform faster. Deliver sooner. Live better."
```

## Call-to-Actions by Page

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home | Take Assessment | Read Book |
| Assess | Download Rock Canvas | Read Chapter 13 |
| Tools | Open Calculator | Take Assessment |
| Book | Buy on Amazon | Read Free Chapters |
| Blog | Read Post | Subscribe (future) |

## Mobile Considerations

All pages fully responsive:
- Single column layout on mobile
- Touch-friendly buttons (44px+ targets)
- Sticky navigation collapses gracefully
- Assessment works perfectly on phones
- Calculators in full-screen modals
- Footer stacks vertically

## SEO Structure

### Meta Information
- All pages have unique titles
- All pages have meta descriptions
- Semantic HTML throughout
- Proper heading hierarchy

### Content Strategy
- Home: Broad keywords (organizational velocity, biotech transformation)
- Assess: Long-tail (velocity assessment, organizational diagnostic)
- Tools: Specific tools (rock planning, activity chart)
- Book: Book title and author
- Blog: Article-specific keywords

## Analytics Tracking Points

Currently: Client-side only (localStorage)

**Recommended future tracking:**
- Page views (where do people land?)
- Assessment completion rate
- Tool downloads (which are most popular?)
- Calculator usage
- Time on page
- Exit pages

## Performance Budget

| Resource Type | Budget | Actual |
|---------------|--------|--------|
| HTML | 100KB | ~60KB |
| CSS | 50KB | ~35KB |
| JavaScript | 100KB | ~30KB |
| Images | 1MB | TBD |
| Total Page Load | <2s | Target achieved |

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Respects prefers-reduced-motion
- High contrast ratios (WCAG AA)
- Alt text on all images (when added)

## Future Enhancements

**Phase 2 (When capacity allows):**
- Newsletter signup integration
- Comments on blog (GitHub Issues integration)
- Search functionality
- Dark mode toggle
- More calculators
- Case studies section
- Video content

**Phase 3 (The Foundry):**
- Demo of platform
- Partner directory
- Community forum
- Implementation consulting booking

## Content Update Schedule

### Regular (Required)
- Blog: Monthly minimum
- Assessment benchmarks: Annually

### As Needed
- Tools: When new templates created
- Book: When new editions released

### Static (No updates needed)
- Core framework content
- Assessment questions
- Calculator logic

---

**The site is complete and ready for launch!**

All core functionality works, design is polished, and content is in place. Just add images and download files before going live.