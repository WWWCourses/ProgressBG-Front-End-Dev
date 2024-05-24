// Function to scroll to a specific page index
function scrollToPage(index) {
  // Calculate the top scroll position by summing the heights of all previous pages
  const articles = document.querySelectorAll('main>section.pages>article');
  let topScroll = 0;

  for (let i = 0; i < index; i++) {
    topScroll += articles[i].clientHeight;
  }

  // Scroll to the calculated position smoothly
  window.scrollTo({
    top: topScroll,
    left: 0,
    behavior: 'smooth'
  });
}

// Get DOM nodes:
let navLinks = document.querySelectorAll('nav>a');
// Get a page hight
let pageHeight = document.querySelector('main>section.pages>article').clientHeight;


// Attach click event on nav
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
    // we want our link click actions, not the browser defaults
    e.preventDefault();

    // do the scroll:
    scrollToPage(i);

    // (optional): keep browser history tidy - allows to navigate back and forward to pages.
    // with this the hash value would not be displayed:
    history.pushState(null, document.title, window.location.pathname + window.location.search);
    // // if we want to preserve the hash value:
    // let pageHref = navLinks[i].href;
    // history.pushState(null, document.title, pageHref);
  })
}