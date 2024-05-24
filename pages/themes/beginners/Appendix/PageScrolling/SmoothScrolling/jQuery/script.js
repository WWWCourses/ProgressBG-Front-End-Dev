$(document).ready(function(){
    // Add smooth scrolling to all nav links
    $("nav a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;
        console.log(`hash: ${hash}`);

        // Calculate vertical distance  between the top edge of the currentPage element and the top edge of the main element.
        const currentPage = $(hash)
        const topOffset = currentPage.offset().top - $('main')[0].offsetTop;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: topOffset
        }, 800, function(){
            //do not add hash in URL, but still keep browsing history
            history.pushState(null, document.title, window.location.pathname+window.location.search);
        });
      } // End if
    });
});