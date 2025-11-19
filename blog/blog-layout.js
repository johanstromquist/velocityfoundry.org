/* ===================================
   BLOG LAYOUT MANAGER
   Responsibility: Dynamically inject navigation, footer, and post navigation

   This script handles all shared layout elements for blog posts so you
   only need to maintain content in each blog post HTML file.
   =================================== */

// Navigation HTML template
const navigationHTML = `
    <nav class="nav">
        <div class="container">
            <a href="../index.html" class="nav-logo">
                <img src="../assets/images/logo.png" alt="Velocity Foundry Logo">
                <span>Velocity Foundry</span>
            </a>
            <ul class="nav-menu">
                <li><a href="../assess.html">Assess</a></li>
                <li><a href="../tools.html">Tools</a></li>
                <li><a href="../book.html">Book</a></li>
                <li><a href="../blog.html">Blog</a></li>
            </ul>
        </div>
    </nav>
`;

// Footer HTML template
const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About</h4>
                    <p>By Johan Strömquist, President & Chief Innovation Officer at SSI Strategy / NDA Group</p>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>Email: <a href="mailto:johan.stromquist@ssistrategy.com">johan.stromquist@ssistrategy.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/johanstromquist" target="_blank">@johanstromquist</a></p>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="../assess.html">Velocity Assessment</a></li>
                        <li><a href="../tools.html">Templates & Tools</a></li>
                        <li><a href="../book.html">The Book</a></li>
                        <li><a href="../blog.html">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Johan Strömquist. All rights reserved.</p>
                <p class="footer-motto">Transform faster. Deliver sooner. Live better.</p>
            </div>
        </div>
    </footer>
`;

/**
 * Get published posts (respecting publish dates)
 */
function getPublishedPosts() {
    const now = new Date();
    return posts.filter(post => {
        if (!post.publishDate) return true;
        // Parse publishDate as UTC at 12:00 (noon) to match blog-loader.js
        const publishDate = new Date(post.publishDate + 'T12:00:00Z');
        return publishDate <= now;
    });
}

/**
 * Find current post based on URL slug
 */
function getCurrentPost() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const slug = fileName.replace('.html', '');

    return posts.find(post => post.slug === slug);
}

/**
 * Get next and previous posts (from published posts only)
 * Previous = older post, Next = newer post (chronological reading)
 */
function getAdjacentPosts(currentPost) {
    const publishedPosts = getPublishedPosts();
    const currentIndex = publishedPosts.findIndex(post => post.slug === currentPost.slug);

    return {
        // Previous = older post (higher index in newest-first array)
        previous: currentIndex < publishedPosts.length - 1 ? publishedPosts[currentIndex + 1] : null,
        // Next = newer post (lower index in newest-first array)
        next: currentIndex > 0 ? publishedPosts[currentIndex - 1] : null
    };
}

/**
 * Generate post navigation HTML (next/previous links)
 */
function generatePostNavigation(currentPost) {
    if (!currentPost) return '';

    const { previous, next } = getAdjacentPosts(currentPost);

    let navHTML = '';

    // Previous link (newer post)
    if (previous) {
        navHTML += `<a href="${previous.slug}.html" class="post-nav-prev">← ${previous.title}</a>`;
    } else {
        navHTML += '<span></span>'; // Empty span for flexbox spacing
    }

    // Back to all posts link (centered)
    navHTML += '<a href="../blog.html" class="post-nav-all">All Posts</a>';

    // Next link (older post)
    if (next) {
        navHTML += `<a href="${next.slug}.html" class="post-nav-next">${next.title} →</a>`;
    } else {
        navHTML += '<span></span>'; // Empty span for flexbox spacing
    }

    return navHTML;
}

/**
 * Format date for display (e.g., "October 8, 2025")
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Generate hero section HTML
 */
function generateHeroSection(post) {
    if (!post) return '';

    return `
        <section class="post-hero" style="background-image: url('../${post.image}');">
            <div class="post-hero-content">
                <time>${formatDate(post.date)}</time>
                <h1>${post.title}</h1>
                <p class="post-byline">By Johan Strömquist</p>
            </div>
        </section>
    `;
}

/**
 * Initialize blog layout
 */
function initBlogLayout() {
    // Inject navigation
    const navPlaceholder = document.getElementById('blog-nav');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navigationHTML;
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('blog-footer');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // Get current post and generate hero + navigation
    const currentPost = getCurrentPost();

    if (currentPost) {
        // Inject hero section
        const heroPlaceholder = document.getElementById('blog-hero');
        if (heroPlaceholder) {
            heroPlaceholder.outerHTML = generateHeroSection(currentPost);
        }

        // Generate navigation HTML once
        const navHTML = generatePostNavigation(currentPost);

        // Inject top navigation (below hero) - same as bottom
        const topNavPlaceholder = document.getElementById('blog-top-nav');
        if (topNavPlaceholder) {
            topNavPlaceholder.innerHTML = navHTML;
        }

        // Inject bottom navigation (with next/prev)
        const bottomNavPlaceholder = document.getElementById('blog-bottom-nav');
        if (bottomNavPlaceholder) {
            bottomNavPlaceholder.innerHTML = navHTML;
        }
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogLayout);
} else {
    initBlogLayout();
}
