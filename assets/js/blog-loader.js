/* ===================================
   BLOG LOADER
   Responsibility: Load and display blog posts from posts.js
   =================================== */

(function() {
    'use strict';

    function loadPosts() {
        const blogList = document.getElementById('blog-list');
        const noPosts = document.getElementById('no-posts');

        if (!blogList) return;

        // Check if posts array exists and has content
        if (typeof posts === 'undefined' || posts.length === 0) {
            if (noPosts) {
                noPosts.style.display = 'block';
            }
            return;
        }

        // Sort posts by date (newest first)
        const sortedPosts = [...posts].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        // Generate HTML for each post
        sortedPosts.forEach((post, index) => {
            const postCard = document.createElement('article');
            postCard.className = 'post-card fade-in-up';
            postCard.style.animationDelay = `${index * 0.1}s`;

            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const imageHtml = post.image ? `<div class="post-image"><img src="${post.image}" alt="${post.title}" /></div>` : '';

            postCard.innerHTML = `
                ${imageHtml}
                <div class="post-card-content">
                    <time class="post-date">${formattedDate}</time>
                    <h3><a href="blog/${post.slug}.html">${post.title}</a></h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span class="read-time">${post.readTime}</span>
                        <a href="blog/${post.slug}.html" class="read-more">Read more →</a>
                    </div>
                </div>
            `;

            blogList.appendChild(postCard);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPosts);
    } else {
        loadPosts();
    }
})();