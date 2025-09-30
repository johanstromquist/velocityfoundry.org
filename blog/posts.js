/* ===================================
   BLOG POSTS MANIFEST
   Responsibility: List of all blog posts

   TO ADD A NEW POST:
   1. Create the HTML file in blog/ directory
   2. Add entry to this array
   3. Commit and push - that's it!
   =================================== */

const posts = [
    {
        slug: '2024-09-velocity-os',
        title: 'Velocity OS: The DNA of an Accelerating Biotech',
        date: '2024-09-23',
        excerpt: 'It wasn\'t the 6.8-year development timeline. It was the parking lot at 5:30 PM. Half empty. If everyone\'s here at 9 PM, we\'ve designed our organization wrong.',
        readTime: '8 min',
        image: 'assets/images/Formula1.png'
    },
    {
        slug: '2024-09-the-velocity-foundry',
        title: 'The Velocity Foundry',
        date: '2024-09-16',
        excerpt: 'How is it that my teenager can build apps faster than our IT department? Welcome to biotech\'s uncomfortable truth about the new reality of software creation.',
        readTime: '7 min',
        image: 'assets/images/VelocityFoundry.jpg'
    },
    {
        slug: '2024-09-when-speed-is-the-path-to-compliance',
        title: 'When Speed Is the Path to Compliance',
        date: '2024-09-09',
        excerpt: 'The most compliant trial I ever saw had 500 protocol deviations. What if moving faster IS how we ensure compliance - when we move smart?',
        readTime: '6 min',
        image: 'assets/images/rapids.png'
    },
    {
        slug: '2024-09-when-speed-is-everything',
        title: 'When Speed Is Everything',
        date: '2024-09-02',
        excerpt: 'Every day a drug sits in development is a day someone doesn\'t get better. In biotech\'s AI-powered future, velocity has become as fundamental as funding.',
        readTime: '7 min',
        image: 'assets/images/congestion.png'
    }
];

// Note: Posts are displayed newest first (sorted by date)