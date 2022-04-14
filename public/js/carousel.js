const slider = document.querySelector('.mySlides')
let countSlide = 0
document.querySelector('.next').addEventListener('click', ()=>{
  countSlide++
  if(countSlide == 6){ // If you add slide, increase it by one
    countSlide = 0
  }
  if(window.innerWidth <= 1280){
    slider.style.marginLeft = `calc(-${100*countSlide}vw)`
  }else{
    slider.style.marginLeft = `calc(-${50*countSlide}vw)`
  }
})
document.querySelector('.prev').addEventListener('click', ()=>{
  countSlide--
  if(countSlide == -1){
    countSlide = 5 // If you add slide, increase it by one
  }
  if(window.innerWidth <= 1280){
    slider.style.marginLeft = `calc(-${100*countSlide}vw)`
  }else{
    slider.style.marginLeft = `calc(-${50*countSlide}vw)`
  }
})