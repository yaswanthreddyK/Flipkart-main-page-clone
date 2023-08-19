const container = document.querySelector('.products-n-offers');
const  leftBtns = container.querySelectorAll('.offer-btn.btn-left');
const  rightBtns = container.querySelectorAll('.offer-btn.btn-right');

const noOfBtns = leftBtns.length;
const leftHiddenLength = new Array(noOfBtns).fill(0);
const rightHiddenLength = new Array(noOfBtns).fill(0);

let leftbtnClicks = new Array(noOfBtns).fill(0);
let rightbtnClicks = new Array(noOfBtns).fill(0);

const moveRight = ( target ,index ) => {
  const parent = target.parentElement;
  const children = parent.querySelectorAll('.product');
  const noOfChildren = children.length;
  const childLength = parent.firstElementChild.getBoundingClientRect().width;
  const parentLength = noOfChildren * childLength;
  const parentVisibleLength = parent.getBoundingClientRect().width;
 
  if(!leftHiddenLength[index]){
    return ;
  }

  if(parentVisibleLength <= leftHiddenLength[index]){
  leftbtnClicks[index]++;

    children.forEach(child => {
     child.style.transform = `translateX(${rightbtnClicks[index]*parentVisibleLength-leftHiddenLength[index]}px)`;
    })
   
    leftHiddenLength[index] -=  parentVisibleLength;
    rightHiddenLength[index] += parentVisibleLength;
 }else{

   if(leftHiddenLength[index] === 0.1){
         return;
     }
     children.forEach(child => {
         child.style.transform = `translateX(${((leftbtnClicks[index])*parentVisibleLength)}px)`;
        })
        leftHiddenLength[index] = 0.1; 
        rightHiddenLength[index] = parentLength - parentVisibleLength;
 }
}






const moveLeft = ( target , index ) => {

  const parent = target.parentElement;
  const children = parent.querySelectorAll('.product');
  const noOfChildren = children.length;
  const childLength = parent.firstElementChild.getBoundingClientRect().width;
  const parentLength = noOfChildren * childLength;
  const parentVisibleLength = parent.getBoundingClientRect().width;
  if(!rightHiddenLength[index]){
    rightHiddenLength[index] = parentLength - parentVisibleLength;
    leftHiddenLength[index] = 0;
  }
    if(parentVisibleLength <= rightHiddenLength[index]){
        rightbtnClicks[index]++;
       children.forEach(child => {
        child.style.transform = `translateX(${rightbtnClicks[index]*-1*parentVisibleLength}px)`;
       })
       rightHiddenLength[index] -=  parentVisibleLength;
       leftHiddenLength[index] += parentVisibleLength;
    }else{
  
        if(rightHiddenLength[index] === 0.1){
           
            return;
        }
        children.forEach(child => {
            child.style.transform = `translateX(${(-1)*((rightbtnClicks[index])*parentVisibleLength+rightHiddenLength[index])}px)`;
           })
           rightHiddenLength[index] = 0.1; 
    
           leftHiddenLength[index] = parentLength - parentVisibleLength;
    }
}


for(let i = 0; i < noOfBtns; i++){
    leftBtns[i].addEventListener("click", (e)=>{moveRight(e.currentTarget,i)});
    rightBtns[i].addEventListener("click",(e)=>{moveLeft(e.currentTarget,i)});
}

