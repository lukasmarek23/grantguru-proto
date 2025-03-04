// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example: Adjust iframe height dynamically (if needed)
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    // Future functionality can go here (e.g., form submission handling, analytics)
});
