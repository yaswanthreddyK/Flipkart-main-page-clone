const carousal = document.querySelector(".ad-carousal");
let currentImg = document.querySelector(".ad-img");

const leftCarousalBtn = document.querySelector(".car-left");
const rightCarousalBtn = document.querySelector(".car-right");

const rectObj = currentImg.getBoundingClientRect();
const currentWidth = rectObj.width;
const images = document.querySelectorAll(".ad-img");

let currentIndex = 0;

function moveImages(count = images.length){
   for(let i=0; i < count; i++){
    images[i].style.transform = `translateX(${-1*currentIndex*currentWidth}px)`;
   }
}

function handleRightCarousalClick() {
  rightCarousalBtn.removeEventListener('click',handleRightCarousalClick);
    if(currentIndex < images.length-1){
        currentIndex++;
        moveImages();
    }
     
    if(currentIndex === images.length-1){
 
      

    }
    setTimeout(()=>{
      rightCarousalBtn.addEventListener("click", handleRightCarousalClick);
    },300)
}


function handleLeftCarousalClick(){
  leftCarousalBtn.removeEventListener("click", handleLeftCarousalClick);
    if(currentIndex > 0){
        currentIndex--;
        moveImages();
    }
    
  setTimeout(()=>{
    leftCarousalBtn.addEventListener("click", handleLeftCarousalClick);
  },300)
}

leftCarousalBtn.addEventListener("click", handleLeftCarousalClick);
rightCarousalBtn.addEventListener('click',handleRightCarousalClick);

