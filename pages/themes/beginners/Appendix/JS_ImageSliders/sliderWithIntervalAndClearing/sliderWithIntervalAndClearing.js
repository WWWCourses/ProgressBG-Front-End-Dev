function showOneElementOnly(imgs, i){
  // first hide all
  for(let i=0; i<imgs.length; i++){
    // imgs[i].style.display = "none";
    imgs[i].style.opacity = "0";

  }

  // now display the one you need
  // imgs[i].style.display = "block";
  let image = img[i];
  if(image.complete){
    image.style.opacity = "1";
    spinner_overlay.style.display = "none";
  }
}

function setNextElementIndex(arr,n){
  // here we set the global images index
  slidesIndex += n;

  if(slidesIndex === -1  || slidesIndex===undefined){
    slidesIndex = arr.length-1;
  }
  if(slidesIndex===arr.length){
    slidesIndex = 0;
  }
}

function showNextImage(event) {
  // if the function is called from addEventListener event will be a non empyt object.
  // but if the function is called from setInterval, event will be an undefind
  // sliderIntervalId will be set, only if the interval was started
  if( event && sliderIntervalId ){
    clearInterval(sliderIntervalId);
    sliderIntervalId = undefined;
  }
  showOneElementOnly(imgs,slidesIndex);
  setNextElementIndex(imgs, +1);
}

function showPrevImage() {
  // if the function is called from addEventListener event will be a non empyt object.
  // but if the function is called from setInterval, event will be an undefind
  // sliderIntervalId will be set, only if the interval was started
  if( event && sliderIntervalId ){
    clearInterval(sliderIntervalId);
    sliderIntervalId = undefined;
  }
  showOneElementOnly(imgs,slidesIndex);
  setNextElementIndex(imgs, -1);
}

function setTransitionEffect(imgs, time) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transition = time;
  }
}

let spinner_overlay = document.querySelector('.spinner_overlay');
let imgs = document.querySelectorAll('.imgWrapper img');
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');

let slidesIndex = 0;
spinner_overlay.style.display = "none";

// start slide show:
let sliderIntervalId = setInterval(showNextImage, 2000);
setTransitionEffect(imgs, '2s');

// or if we just want an image to be shown:
// showNextImage();

btnNext.addEventListener('click', showNextImage );
btnPrev.addEventListener('click', showPrevImage );
