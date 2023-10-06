
// toggles the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// menu closes when a link is clicked
const mobileLinks = document.querySelectorAll('.menu a');

mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});
