/* ===================================
   BLOG POSTS MANIFEST
   Responsibility: List of all blog posts

   TO ADD A NEW POST:
   1. Create the HTML file in blog/ directory
   2. Add entry to this array
   3. Commit and push - that's it!

   SCHEDULING POSTS:
   - Add a 'publishDate' field to schedule a post for future publication
   - Posts without a publishDate are published immediately
   - Posts with a publishDate in the future won't appear until that date
   - Format: 'YYYY-MM-DD' or 'YYYY-MM-DD HH:MM:SS'
   - The 'date' field is still used for display purposes
   =================================== */

const posts = [
    {
        slug: '2025-11-on-change-release',
        title: 'On Change is Live',
        date: '2025-11-19',
        publishDate: '2025-11-19',
        excerpt: 'After watching 300+ transformations, I wrote the book I wish existed at Day 45—when doubt peaks and most transformations die. On Change is live today.',
        readTime: '5 min',
        image: 'assets/images/On_Change_Cover_Kindle.jpg'
    },
    {
        slug: '2026-01-compassionate-revolutionary',
        title: 'The Compassionate Revolutionary: Why You Don\'t Have to Choose Between Speed and Humanity',
        date: '2026-01-13',
        publishDate: '2026-01-13',
        excerpt: 'The leader who sees 95% waste with perfect clarity AND feels the human cost with perfect empathy—they\'re not different people. They\'re the same person, holding both truths simultaneously. That\'s the compassionate revolutionary.',
        readTime: '12 min',
        image: 'assets/images/balanced_scales.png'
    },
    {
        slug: '2026-01-transformation-failure',
        title: 'Why Your Successful 90-Day Transformation Will Fail in 18 Months',
        date: '2026-01-06',
        publishDate: '2026-01-06',
        excerpt: 'Twelve successful Rocks over eighteen months. Protocol amendments from 42 days to 28 hours. Then everything regressed. This is the Sustainability Gap—and why most transformations fail long after they \'succeed.\'',
        readTime: '14 min',
        image: 'assets/images/eroding_cliff.png'
    },
    {
        slug: '2025-12-day-45',
        title: 'Day 45: The Moment Every Transformation Almost Dies (And How to Survive It)',
        date: '2025-12-30',
        publishDate: '2025-12-30',
        excerpt: 'The timeline is slipping. Key people have been pulled away. Pilot results are good but not spectacular. Sarah, your Rock Owner, just asked for \'a conversation about scope.\' Welcome to Day 45—the moment every transformation almost dies.',
        readTime: '13 min',
        image: 'assets/images/storm_approaching.png'
    },
    {
        slug: '2025-12-coalition-72-hours',
        title: 'How to Build a Change Coalition in 72 Hours (While Your Competitors Spend 6 Months)',
        date: '2025-12-23',
        publishDate: '2025-12-23',
        excerpt: 'Traditional stakeholder mapping takes six months. You have 72 hours from Rock assignment to launch. Here\'s how to build a change coalition that protects your transformation—before you need it.',
        readTime: '11 min',
        image: 'assets/images/connecting_network.png'
    },
    {
        slug: '2025-12-three-categories',
        title: 'The Three Categories Every Person Falls Into During Transformation (And What You Owe Each One)',
        date: '2025-12-16',
        publishDate: '2025-12-16',
        excerpt: 'When AI and automation eliminate roles, every person falls into one of three categories. What you owe each one determines whether your transformation succeeds or fails—and whether you\'re remembered as a leader or a coward.',
        readTime: '13 min',
        image: 'assets/images/three_doors.png'
    },
    {
        slug: '2025-12-reading-resistance',
        title: 'Your CMC Team Isn\'t Blocking You—They\'re Trying to Save Your Ass',
        date: '2025-12-09',
        publishDate: '2025-12-09',
        excerpt: 'A VP almost fired her entire CMC team for \'blocking\' transformation. Twenty minutes later, she discovered they were trying to save her from a manufacturing shutdown. Resistance is information—if you know how to listen.',
        readTime: '12 min',
        image: 'assets/images/warning_beacon.png'
    },
    {
        slug: '2025-12-change-management-tax',
        title: 'The $900 Billion Change Management Tax (And Why Speed Isn\'t the Enemy)',
        date: '2025-12-02',
        publishDate: '2025-12-02',
        excerpt: 'McKinsey data shows $900B wasted on failed digital transformations. The myth: choose between speed and change management. The reality: bad change management slows you down, good change management accelerates transformation.',
        readTime: '11 min',
        image: 'assets/images/burning_money.png'
    },
    {
        slug: '2025-11-i-lied-to-you',
        title: 'I Lied to You About Organizational Transformation',
        date: '2025-11-25',
        publishDate: '2025-11-25',
        excerpt: 'I wrote The Velocity Framework as if transformation were purely mechanical. I knew better. This is the confession about what was missing—and why you needed the anger before the empathy.',
        readTime: '10 min',
        image: 'assets/images/removed_mask.png'
    },
    {
        slug: '2025-11-kill-the-redlines',
        title: 'Kill the Redlines',
        date: '2025-11-17',
        publishDate: '2025-11-17',
        excerpt: 'It\'s 10 PM on a Thursday. You\'re on email round 17, negotiating an NDA that\'s 98% identical to the last 50. Nine hours on a document that will never be read again. And this isn\'t unusual. This is Thursday.',
        readTime: '13 min',
        image: 'assets/images/racing_yacht.png'
    },
    {
        slug: '2025-11-the-capability-engine',
        title: 'The Capability Engine',
        date: '2025-11-10',
        publishDate: '2025-11-10',
        excerpt: 'It\'s Tuesday, 9:15 AM. Your new hire is sitting in reception. No laptop. No access badge. Six hours of coordination that requires zero HR expertise. And this isn\'t unusual. This is Tuesday.',
        readTime: '10 min',
        image: 'assets/images/song_bird.png'
    },
    {
        slug: '2025-11-the-continuous-close',
        title: 'The Continuous Close',
        date: '2025-11-03',
        publishDate: '2025-11-03',
        excerpt: 'It\'s 8 PM on a Tuesday. You\'re searching for a $47,000 variance. Another missed family dinner. Four hours to find a mistake that took four seconds to make. The worst part? Next month, everything you\'re doing tonight will be worthless.',
        readTime: '11 min',
        image: 'assets/images/beans.png'
    },
    {
        slug: '2025-10-its-great-escape',
        title: 'IT\'s Great Escape',
        date: '2025-10-27',
        publishDate: '2025-10-27',
        excerpt: 'Your ticket queue has 47 requests. Your team works nights and weekends. You\'re not building anymore—you\'re drowning. Here\'s the truth: In the Velocity age, your survival depends on making most of what you do today unnecessary.',
        readTime: '12 min',
        image: 'assets/images/walkway.png'
    },
    {
        slug: '2025-10-from-friction-to-velocity',
        title: 'From Friction to Velocity: How Your Support Functions Can Make You Accelerate',
        date: '2025-10-20',
        publishDate: '2025-10-20',
        excerpt: 'Most organizations operate at 5% efficiency. Not because people aren\'t working hard, but because 95% of their energy goes into overcoming internal friction. What if the very functions we built to manage complexity are actually creating it?',
        readTime: '8 min',
        image: 'assets/images/hamster.jpg'
    },
    {
        slug: '2025-10-the-bio-tech-stack',
        title: 'The Bio Tech Stack: Golden Paths for Every Biotech',
        date: '2025-10-06',
        publishDate: '2025-10-06 14:00:00',
        excerpt: '80% of biotech operations follow predictable patterns. We\'re all special snowflakes doing identical administrative work. Stop rebuilding these processes from scratch and start assembling your Bio Tech Stack.',
        readTime: '7 min',
        image: 'assets/images/techstack.png'
    },
    {
        slug: '2025-10-platos-dialogue-on-agi',
        title: 'Plato\'s Dialogue on AGI',
        date: '2025-10-08',
        publishDate: '2025-10-08',
        excerpt: 'Socrates would have laughed at our AGI debates. While we argue about whether AI is "truly intelligent," we\'re missing what\'s actually happening - and making the same philosophical error ancient Athens already solved.',
        readTime: '9 min',
        image: 'assets/images/Socrates.png'
    },
    {
        slug: '2025-10-operationalizing-velocity-os',
        title: 'Operationalizing Velocity OS: From Committee Speed to Continuous Speed',
        date: '2025-10-13',
        publishDate: '2025-10-13',
        excerpt: 'The Velocity Operating System isn\'t philosophy - it\'s mechanics. Five core components that work together to eliminate organizational friction and move from committee speed to continuous speed.',
        readTime: '10 min',
        image: 'assets/images/switchboard.png'
    },
    {
        slug: '2025-09-velocity-os',
        title: 'Velocity OS: The DNA of an Accelerating Biotech',
        date: '2025-09-23',
        excerpt: 'It wasn\'t the 6.8-year development timeline. It was the parking lot at 5:30 PM. Half empty. If everyone\'s here at 9 PM, we\'ve designed our organization wrong.',
        readTime: '8 min',
        image: 'assets/images/Formula1.png'
    },
    {
        slug: '2025-09-the-velocity-foundry',
        title: 'The Velocity Foundry',
        date: '2025-09-16',
        excerpt: 'How is it that my teenager can build apps faster than our IT department? Welcome to biotech\'s uncomfortable truth about the new reality of software creation.',
        readTime: '7 min',
        image: 'assets/images/VelocityFoundry.jpg'
    },
    {
        slug: '2025-09-when-speed-is-the-path-to-compliance',
        title: 'When Speed Is the Path to Compliance',
        date: '2025-09-09',
        excerpt: 'The most compliant trial I ever saw had 500 protocol deviations. What if moving faster IS how we ensure compliance - when we move smart?',
        readTime: '6 min',
        image: 'assets/images/rapids.png'
    },
    {
        slug: '2025-09-when-speed-is-everything',
        title: 'When Speed Is Everything',
        date: '2025-09-02',
        excerpt: 'Every day a drug sits in development is a day someone doesn\'t get better. In biotech\'s AI-powered future, velocity has become as fundamental as funding.',
        readTime: '7 min',
        image: 'assets/images/congestion.png'
    }
];

// Note: Posts are displayed newest first (sorted by date)