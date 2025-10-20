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
        image: 'assets/images/parking-lot.png'
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