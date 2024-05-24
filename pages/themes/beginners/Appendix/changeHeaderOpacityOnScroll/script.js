document.addEventListener('DOMContentLoaded', function(e){
    // The header element to be modified
    const headerNode = document.querySelector('header');
    const htmlNode = document.documentElement;
    const bodyFontSize = getFontSize(htmlNode);

    let lastKnownScrollPosition = 0;

    // Function to get the current font size of an element
    function getFontSize(el) {
        const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        return parseFloat(style);
    }

    // Function to change the header style based on scroll position
    function changeHeaderOnScroll(scrollPos) {
        // Change header opacity when scrolled more than 5 lines (5em)
        if (scrollPos > 5 * bodyFontSize) {
            headerNode.style.opacity = '0.5';
        } else {
            headerNode.style.opacity = '1';
        }
    }

    // Event listener for the scroll event
    window.addEventListener('scroll', function(e) {
        // Store the last known scroll position
        lastKnownScrollPosition = window.scrollY;
		changeHeaderOnScroll(lastKnownScrollPosition);
    });
});
