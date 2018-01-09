var slideOnInterval = function() {
	'use strict';  

	// common variables
	var imgURLs = [
		"http://imageshack.com/a/img922/3858/5Pd5dc.jpg",    
		"http://imageshack.com/a/img923/3776/lKVbAp.jpg",
		"http://imageshack.com/a/img923/6770/WXkPF9.jpg",
		"http://imageshack.com/a/img923/2200/SzDjvi.jpg",
		"http://imageshack.com/a/img924/8715/tz0p3T.jpg",
	];
	var i = 0,
		intervalID,
		imgNode = document.getElementById("imgWrapper");

	// set first image to be loaded
	setImage(imgNode, imgURLs[i]);

	// attach events
	document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
	document.getElementsByClassName('next')[0].addEventListener("click", onNextClick);
	document.getElementsByClassName('prev')[0].addEventListener("click", onPrevClick);

	// listeners functions
	function onDOMContentLoaded(){
		intervalID = setInterval(nextImage, 1000);
	}	
	function onNextClick(){
		clearInterval(intervalID);
		nextImage();
	}
	function onPrevClick(){
		clearInterval(intervalID);
		prevImage();
	}


	// helper functions
	function nextImage() {
		i = ++i % imgURLs.length;
		console.log(`i=${i}`);
		setImage(imgNode, imgURLs[i]);
	}
	function prevImage() {
		if(i>0){
			i--;
		}else{
			i = imgURLs.length-1;
		}		
		console.log(`i=${i}`);
		setImage(imgNode, imgURLs[i]);
	}
	function setImage(imgNode, imgURL) {
		imgNode.setAttribute("src", imgURL);
	}
}();