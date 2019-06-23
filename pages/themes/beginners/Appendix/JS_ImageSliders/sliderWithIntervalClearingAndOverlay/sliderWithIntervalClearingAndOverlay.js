function showOneElementOnly(imgs, i){
  // first hide all
  for(let i=0; i<imgs.length; i++){
    imgs[i].style.opacity = "0";
  }

  // now display the one you need
  let image = imgs[i];
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

  console.log(slidesIndex);
}
function getNextIndex(arr, increment){
  // here we set the global images index
  slidesIndex += increment;

  if(slidesIndex === -1  || slidesIndex===undefined){
    slidesIndex = arr.length-1;
  }
  if(slidesIndex===arr.length){
    slidesIndex = 0;
  }

  return slidesIndex;
}

function showNextOrPrevImage(event, next) {
  // if the function is called from addEventListener event will be a non empyt object.
  // but if the function is called from setInterval, event will be an undefind

  // sliderIntervalId will be set, only if the interval was started
  if( event && sliderIntervalId ){
    clearInterval(sliderIntervalId);
    sliderIntervalId = undefined;
  }

  let increment = next ? +1 : -1;
  let slidesIndex = getNextIndex(imgs, increment);

  console.log(`slidesIndex: ${slidesIndex}`);
  showOneElementOnly(imgs, slidesIndex);
}

let spinner_overlay = document.querySelector('.spinner_overlay');
let imgs = document.querySelectorAll('.imgWrapper img');
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let sliderIntervalId;

let slidesIndex = 0;


btnNext.addEventListener('click', function (event) {
  showNextOrPrevImage(event, true)
} );
btnPrev.addEventListener('click', function (event) {
  showNextOrPrevImage(event, false)
} );

window.addEventListener('load', function () {
  sliderIntervalId = setInterval(showNextOrPrevImage, 2000, undefined, true);
})

// start slide show:
// sliderIntervalId = setInterval(showNextOrPrevImage, 2000, undefined, +1);
// or if we just want an image to be shown:
// showNextImage();
