const express = require('express');
const app = express();
const nodemailer = require ('nodemailer');
const PORT =  process.env.PORT || 5000;

//middleware (software intermediario)
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contacto.html')
})

app.post('/', (req, res) =>{
    console.log(req.body);
/* esto es para el transporter localhost:*//*
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'davitehuelche@gmail.com',
            pass: 'flbb ewqk zrcm bcbp' //contraseña temporal eso lo debes de generar en https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4NNt4ccGjknUulZMurIZgPMGlI8q_7qORssBCXjfohYG-K2Ce63tPnIt_2y_NXRb8OKnS0zCdtYu4uxpGcIJfEqTmz6Iw
        }
    })*/
/*smtp*/
    const transporter = nodemailer.createTransport({
        service:'servidor',
        port: 465,
        secure:false,
        auth:{
            user: 'webmaster@davidserrano.com.ar',
            pass: 'psw'
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    const mailOptions ={
        form: req.body.correo,
        to: 'webmaster@davidserrano.com.ar',
        subject: `Mensaje de ${req.body.correo}: ${req.body.asunto}`,
        text: req.body.mensaje
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error);
            res.send('Error');
        }else{
            console.log('Correo eviado. ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server corriendo en puerto localhost:${PORT}`)
})