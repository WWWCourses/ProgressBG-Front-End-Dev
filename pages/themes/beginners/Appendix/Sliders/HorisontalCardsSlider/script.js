document.addEventListener('DOMContentLoaded', () => {
    // Function to auto-scroll the slider
    function autoScroll() {
        scrollAmount += cardWidth; // Increment scroll amount by card width
        if (scrollAmount > sliderScrollableWidth) {
            scrollAmount = 0; // Reset scroll amount to create a loop
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`; // Apply the transform to slider
    }

    // Function to start the auto-scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 2000); // Scroll every 2 seconds
    }

    // Function to stop the auto-scrolling
    function stopAutoScroll() {
        clearInterval(autoScrollInterval); // Clear the interval
    }


    // Get DOM nodes
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // card width + margin
    let scrollAmount = 0; // Initialize scroll amount
    let autoScrollInterval; // Variable to store the interval
    const sliderScrollableWidth = slider.scrollWidth - slider.clientWidth;


    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        stopAutoScroll();
        scrollAmount -= cardWidth; // Decrement scroll amount by card width
        if (scrollAmount < 0) {
            scrollAmount = 0; // Ensure scroll amount doesn't go below 0
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`; // Apply the transform to slider
    });

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        stopAutoScroll();
        scrollAmount += cardWidth; // Increment scroll amount by card width
        if (scrollAmount > sliderScrollableWidth) {
            scrollAmount = sliderScrollableWidth; // Ensure scroll amount doesn't exceed slider width
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`; // Apply the transform to slider
    });

    // Start automatic scrolling on page load
    startAutoScroll();
});
