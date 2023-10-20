$(document).ready(function(){ 
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    }); 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    });


});


const formularioContacto = document.querySelector('.formContacto');
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');

formularioContacto.addEventListener('submit', (e) =>{
    e.preventDefault();
    let dataFormulario = {
        nombre: nombre.value,
        correo: correo.value,
        asunto: asunto.value,
        mensaje: mensaje.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json'); //api
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Correo Enviado');
            nombre.value = "";
            correo.value = "";
            asunto.value = "";
            mensaje.value = "";
        }else{
            alert('algo salió mal!')
        }
    }
    xhr.send(JSON.stringify(dataFormulario));
})


