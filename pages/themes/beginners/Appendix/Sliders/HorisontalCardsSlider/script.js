document.addEventListener('DOMContentLoaded', () => {
    // Function to auto-scroll the slider
    function scrollProducts(width) {
        // Increment scroll amount by card width
        scrollAmount += width;

        // Do not allow negative scrollAmount
        if (scrollAmount<0){
            scrollAmount=0
        }
        // Reset scroll amount to create a loop when last product reached
        if (scrollAmount > sliderScrollableWidth) {
            scrollAmount = 0;
        }

        console.log(`scrollAmount: ${scrollAmount}`);
        // Move slider horizontaly by scrollAmount pixels
        slider.style.transform = `translateX(-${scrollAmount}px)`;
    }

    // Function to start the auto-scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(()=>{
            scrollProducts(cardWidth)
        }, 2000); // Scroll every 2 seconds
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
    const sliderScrollableWidth = slider.scrollWidth - slider.clientWidth + cardWidth;


    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        stopAutoScroll();
        scrollProducts(-cardWidth)

    });

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        stopAutoScroll();
        scrollProducts(+cardWidth)
    });

    // Start automatic scrolling on page load
    startAutoScroll();
});
