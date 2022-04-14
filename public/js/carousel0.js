
const slider0 = document.querySelector('.slider0')
let countSlide0 = 0
document.querySelector('.next0').addEventListener('click', ()=>{
  countSlide0++
  if(countSlide0 == 3){ // If you add comments, increase it by one
    countSlide0 = 0
  }
  if(window.innerWidth <= 1280){
    slider0.style.marginLeft = `calc(-${100*countSlide0}vw)`
  }else{
    slider0.style.marginLeft = `calc(-${50*countSlide0}vw)`
  }

})
document.querySelector('.prev0').addEventListener('click', ()=>{
  countSlide0--
  if(countSlide0 == -1){
    countSlide0 = 2 // If you add comments, increase it by one
  }
  if(window.innerWidth <= 1280){
    slider0.style.marginLeft = `calc(-${100*countSlide0}vw)`
  }else{
    slider0.style.marginLeft = `calc(-${50*countSlide0}vw)`
  }
})