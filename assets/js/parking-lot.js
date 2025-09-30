/* ===================================
   PARKING LOT TEST
   Responsibility: Time-based messaging and clock display
   =================================== */

(function() {
    'use strict';

    // Update clock every second
    function updateClock() {
        const clockElement = document.getElementById('current-time');
        if (!clockElement) return;

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Get time-based message
    function getTimeMessage() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();

        // Weekend check (0 = Sunday, 6 = Saturday)
        if (day === 0 || day === 6) {
            return "Working on the weekend? Your organization has a velocity problem.";
        }

        // Weekday messages based on time
        if (hour < 9) {
            return "Early start? Let's make sure you leave at a reasonable hour today.";
        } else if (hour < 17) {
            return "Still time to leave at a reasonable hour today.";
        } else if (hour < 19) {
            return "How many people are still at your office?";
        } else if (hour < 22) {
            return "This is the 5% reality. It doesn't have to be this way.";
        } else {
            return "Late night at the office? This is organizational friction made visible.";
        }
    }

    // Update time message
    function updateTimeMessage() {
        const messageElement = document.getElementById('time-message');
        if (!messageElement) return;

        messageElement.textContent = getTimeMessage();
    }

    // Initialize
    function init() {
        updateClock();
        updateTimeMessage();

        // Update clock every second
        setInterval(updateClock, 1000);

        // Update message every minute (in case hour changes)
        setInterval(updateTimeMessage, 60000);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();