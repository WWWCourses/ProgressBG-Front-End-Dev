var carouselExamp = function() {
  'use strict';  

  // common variables
  var imgURLs = [
    "sl-3.jpg",    
    "sl-2.jpg",
	  "sl-1.jpg",
  ];
  var i = 0,
  imgNode = document.getElementById("imgWrapper");

  // set first image to be loaded
  changeImage(imgNode, imgURLs[i]);

  // attach events
  document.getElementsByClassName('next')[0].addEventListener("click", nextImage);

  // listeners functions
  function nextImage() {
    i = ++i % imgURLs.length;
    console.log(`i=${i}`);
    changeImage(imgNode, imgURLs[i]);
  }
	
	 // attach events (свързвам другия бутон)
  document.getElementsByClassName('prev')[0].addEventListener("click", prevImage);

  // listeners functions (дефинирам фунцията за другия бутон)
  function prevImage() {
	  --i; // искам i да намалява
	  
// разглеждам случая, когато се върнем до първата картинка, т.е. i стане отрицателно число	  
	  if (i < 0) { 
		  i = imgURLs.length-1; //искам при i < 0, слайдера да зареди последната картинка, което е дължината на масива минус едно
	}
	console.log("i=", i);
	 
    changeImage(imgNode, imgURLs[i]);
  }


  // helper functions
  function changeImage(imgNode, imgURL) {
    imgNode.setAttribute("src", imgURL);
  }
}();