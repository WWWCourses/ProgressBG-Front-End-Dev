
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-links');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Smooth scroll to the section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 55, // Adjust offset for fixed nav
                behavior: 'smooth'
            });
        });
    });
});
