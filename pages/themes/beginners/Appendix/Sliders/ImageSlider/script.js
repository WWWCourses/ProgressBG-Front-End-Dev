document.addEventListener('DOMContentLoaded', function() {
    function initializeImageLoading(images, spinnerOverlay) {
        let imagesLoaded = 0;

        images.forEach(img => {
            img.addEventListener('load', function() {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                    spinnerOverlay.style.display = 'none';
                }
            });

            // In case the image is cached and 'load' event might not fire
            if (img.complete) {
                img.dispatchEvent(new Event('load'));
            }
        });
    }

    function showOneImage(images, idx) {
        console.log(`Show image ${idx}`);
        // hide all images (use opacity, in order to have transition effect)
        for (let i = 0; i < images.length; i++) {
            images[i].style.opacity = "0";
        }

        // display the image with given index
        const image = images[idx];
        image.style.opacity = "1";
    }

    function updateImageIndex(images, indexIncrement) {
        imageIndex += indexIncrement;

        if (imageIndex < 0) {
            imageIndex = images.length - 1;
        }
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
    }

    function showImage(direction) {
        const indexIncrement = direction === 'next' ? 1 : -1;
        updateImageIndex(images, indexIncrement);
        showOneImage(images, imageIndex);
    }

    // Get Dom Nodes:
    const spinnerOverlay = document.querySelector('.spinner_overlay');
    const images = document.querySelectorAll('.images-container img');
    const btnNext = document.querySelector('.next');
    const btnPrev = document.querySelector('.prev');

    let imageIndex = 0;

	initializeImageLoading(images, spinnerOverlay);

    showOneImage(images, imageIndex);

    // start slide show:
    const sliderIntervalId = setInterval(() => showImage('next'), 2000);

    btnNext.addEventListener('click', (event) => {
        clearInterval(sliderIntervalId);
        showImage('next');
    });
    btnPrev.addEventListener('click', (event) => {
        clearInterval(sliderIntervalId);
        showImage('prev');
    });
});
