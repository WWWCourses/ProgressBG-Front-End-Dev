$(document).ready(function(){
    // Add smooth scrolling to all nav links
    $("nav a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        let topOffset = $(hash).offset().top - $('main')[0].offsetTop;

        $('html, body').animate({
          scrollTop: topOffset
        }, 900, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
          //   window.location.hash = hash;

            // do not add hash in URL, but still keep browsing history
            history.pushState(null, document.title, window.location.pathname+window.location.search);
        });
      } // End if
    });
});