const form = document.querySelector('.form-container')
let fullName = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let message = document.getElementById('message')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
        fullName: fullName.value,
        email: email.value,
        number: number.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/contact')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText === 'success'){
            alert('Email sent!')
            fullName.value = ''
            email.value = ''
            number.value = ''
            message.value = ''
        }else{
            alert('Something went wrong')
            console.log(xhr.responseText);
        }
    }

    xhr.send(JSON.stringify(formData))
})