// cambio de tema de claro a oscuro y viceversa y cambiar el texto del boton
var toggleThemeButton = document.getElementById('toggle-theme-btn');
//cuando se hace click llama a la funcion
toggleThemeButton.addEventListener('click', function() {
    //al body le añade la clase tema oscuro 
    document.body.classList.toggle('tema-oscuro');
   //quita la clase tema oscuro
    var isDarkMode = document.body.classList.contains('tema-oscuro');
    //aqui es un if que si esta en tema oscuro cambiar la clase del icono asi pasarlo a sol y viceversa
    if (isDarkMode) {
        document.getElementById('icono').classList.replace("fa-solid","fa-regular");
        document.getElementById('icono').classList.replace("fa-moon","fa-sun");
    } else {
        document.getElementById('icono').classList.replace("fa-regular","fa-solid");
        document.getElementById('icono').classList.replace("fa-sun","fa-moon");
    }

});
//validacion de formulario.
function validacionFormulario(){
    var nom = nombre(document.getElementById('nom').value);
    var email = Correo(document.getElementById("email").value);
    
    if(email == true && nom == true){
        alert('Se ha enviado correctamente');
    }else{
        if(!email && !nom){
            alert('valores de nombre y email no son correctos');
        }
        if(email && !nom){
            alert('valor de nombre no es correcto');
        }
        if(!email && nom){
            alert('valores de email no son corretos');
        }
    }
}
//hacer una funcion grande llamada validacion e ir una por una por funcion y despues si todas son true el registro esta completado
function validacion(){
    var nom = nombre(document.getElementById('nom').value);
    var apellido = Apellido(document.getElementById('Apellido').value);
    var phoneNumber = numerodeTelefono(document.getElementById('phoneNumber').value);
    var email = Correo(document.getElementById("email").value);
    var usuario = nombreUsuario(document.getElementById('usuario').value);
    var password =contrasenya(document.getElementById('password').value);
    if(nom && apellido && phoneNumber && email && usuario && password){
        alert('registrado correctamente');
    }
}
//funcion validar correo
function Correo(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(email); 
    if(!email){
        return alert('Correo no escrito correctamente');
    }
    return emailRegex
}
//funcion validar nombre
function nombre(){
    const regex = /^[a-zA-Z]+$/u ;
    regex.test(nom);
    if(!email){
        return alert('Nombre no escrito correctamente');
    }
    return email;
}
//funcion validar apellido
function Apellido(){
    const regex = /^[a-zA-Z]+$/u ;
    regex.test(apellido);
    if(!apellido){
        return alert('Apellido no escrito correctamente');
    }
    return apellido;
}
//funcion validar numero de telefono 
function numerodeTelefono(){
    const regexTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    regexTelefono.test(phoneNumber);
    if(!phoneNumber){
        return alert('Numero de telefono no escrito correctamente');
    }
    return phoneNumber;
}
//funcion validar nombre de usario 
function nombreUsuario(){
    const regexUsuario = /^[a-zA-Z0-9_]{3,16}$/;
    regexUsuario.test(usuario);
    if(!usuario){
        return alert('usuario no escrito correctamente');
    }
    return usuario;
}
//funcion validar contraseña
function contrasenya(){
    const regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,}$/;
    regexContrasena.test(password);
    if(!password){
        return alert('Contraseña e no escrito correctamente');
    }
    return password;
}
