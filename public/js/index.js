const menu1 = document.querySelectorAll('.menu')
document.querySelector('.menu_box').addEventListener('click', ()=>{
    document.querySelector('.res-links').classList.toggle('activated')
    document.querySelector('.more').classList.toggle('more_active')
    menu1[0].classList.toggle('for_one')
    menu1[1].classList.toggle('for_two')
    menu1[2].classList.toggle('for_three')

})

window.onscroll = function(){scroll()}
document.querySelector('.toTop').addEventListener('click', toTop)

function scroll(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.querySelector('.toTop').style.display = 'block'  
    }else{
        document.querySelector('.toTop').style.display = 'none'
    }
} 

function toTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}