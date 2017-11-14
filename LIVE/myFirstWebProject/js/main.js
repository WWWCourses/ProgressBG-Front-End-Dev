var carouselExamp = function() {
	'use strict';
	// console.log("carouselExamp start!");

	// common variables
	var imgURLs = [
		"http://imageshack.com/a/img922/3858/5Pd5dc.jpg",    
		"http://imageshack.com/a/img923/3776/lKVbAp.jpg",
		"http://imageshack.com/a/img923/6770/WXkPF9.jpg",
		"http://imageshack.com/a/img923/2200/SzDjvi.jpg",
		"http://imageshack.com/a/img924/8715/tz0p3T.jpg",
	];
	var i = 0;

	// elements
	var imgNode = document.getElementById("imgWrapper");

	// set first image to be loaded
	changeImage(imgNode, imgURLs[i]);

	// attach events
	document.getElementsByClassName('prev')[0].addEventListener("click", prevImage);
	document.getElementsByClassName('next')[0].addEventListener("click", nextImage);

	// listeners functions
	function nextImage() {
		i = ++i % imgURLs.length;
		console.log(`i=${i}`);
		changeImage(imgNode, imgURLs[i]);
	}

	function prevImage() {
		// your code here

	}

	// helper functions
	function changeImage(imgNode, imgURL) {
		imgNode.setAttribute("src", imgURL);
	}
}();