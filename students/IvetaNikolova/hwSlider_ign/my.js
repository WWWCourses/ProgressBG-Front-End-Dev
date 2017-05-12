  var carouselExamp = function() {
    'use strict';

    // common variables
    var imgURLs = [
      "http://imageshack.com/a/img922/3858/5Pd5dc.jpg",
      "http://imageshack.com/a/img923/3776/lKVbAp.jpg",
      "http://imageshack.com/a/img923/6770/WXkPF9.jpg",
      // "http://imageshack.com/a/img923/2200/SzDjvi.jpg",
      // "http://imageshack.com/a/img924/8715/tz0p3T.jpg",
    ];
    var colors = ["red", "green", "blue"];
    var i = 0,
    imgNode = document.getElementById("imgWrapper"),
    stopSliderNode = document.getElementById('stopSlider');

    // set first image to be loaded
    // changeImage(imgNode, imgURLs[i]);

    // attach events
    document.getElementsByClassName('next')[0].addEventListener("click", nextImage);
    stopSliderNode.addEventListener('click', stopSlider);

    // listeners functions
    function nextImage() {
      i = ++i % imgURLs.length;
      console.log(`i=${i}`);
      changeImage(imgNode, imgURLs[i]);
    }

    var timer = setInterval(function(){
          changeImage(imgNode, imgURLs[i]);
          console.log(`i=${i}`);
          i++;
          if( i > imgURLs.length - 1){
            i = 0;
          }
          imgNode.style.borderColor = colors[i];
    } , 1000);

    function stopSlider(){
      clearInterval(timer);
    }


    // helper functions
    function changeImage(imgNode, imgURL) {
      imgNode.setAttribute("src", imgURL);
      imgNode.style.border = "5px solid";
    }





   function forCodepen(){
     // set timeout examples
      var counter = false;
      var timer = setInterval(function(){
          changeImage(imgNode, imgURLs[i]);
          console.log(`i=${i}`);

          if ( counter ){
            clearInterval(timer);
          }

          i++;
          if( i > imgURLs.length - 1){
            i = 0;
            counter = true;
          }
        } , 1000);
   }

  }();