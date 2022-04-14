const express = require('express')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.json())

const port = 8000
app.listen(process.env.PORT || port, () => console.log(`Listening to port http://localhost:${port}`))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/apply', (req, res) => {
    res.render('apply')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

// app.use((req, res) => {
//     res.send('Oops!!!')
// })

app.post('/contact', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hr@umtglobal.com',
            pass: 'HR@umt21'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'hr@umtglobal.com',
        subject: `Message from ${req.body.email}: ${req.body.fullName}`,
        text: `${req.body.message} \n ${req.body.number}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent');
            res.send('success')
        }
    })
})