const counter = document.querySelectorAll('.counter')
const topCount = document.querySelector('.four .img')
console.log(window.pageYOffset);

    counter.forEach((c) => {
        c.innerText = '0'
    
        const update = function(){
            const target =+ c.getAttribute('data-target')
            const count =+ c.innerText, inc = target/200
            
            if(count < target){
                c.innerText = `${Math.ceil(count + inc)}`
            }else{
                c.innerText = target
            }
            setTimeout(update, 7)
        
        }
        update();
    })