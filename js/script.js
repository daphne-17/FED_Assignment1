// Menu/NavBar Header Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.header .navbar');

    // Toggle Menu/NavBar Header Dropdown
    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Check if window width is greater than 768px, hide the navbar
    if (window.innerWidth > 768) {
        navbar.classList.remove('show');
    }

    // Listen for window resize events
    window.addEventListener('resize', function () {
        // If window width becomes greater than 768px, hide the navbar
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');
        }
    });
});