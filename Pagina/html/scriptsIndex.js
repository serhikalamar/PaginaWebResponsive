// cambio de tema de claro a oscuro y viceversa y cambiar el texto del boton
var toggleThemeButton = document.getElementById('toggle-theme-btn');



toggleThemeButton.addEventListener('click', function() {

    document.body.classList.toggle('tema-oscuro');
   
    var isDarkMode = document.body.classList.contains('tema-oscuro');
    
    if (isDarkMode) {
        document.getElementById('icono').classList.replace("fa-solid","fa-regular");
        document.getElementById('icono').classList.replace("fa-moon","fa-sun");
    } else {
        document.getElementById('icono').classList.replace("fa-regular","fa-solid");
        document.getElementById('icono').classList.replace("fa-sun","fa-moon");
    }

});
//hacer una funcion grande llamada validacion e ir una por una por funcion y despues si todas son true el registro esta completado
// si no juntar en una array las expresiones regulares, y los valores en un array y que lo recorra
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
function validacion(){
    var nom = nombre(document.getElementById('nom').value);
    var apellido = Apellido(document.getElementById('Apellido').value);
    var phoneNumber = numerodeTelefono(document.getElementById('phoneNumber').value);
    var email = Correo(document.getElementById("email").value);
    var usuario = nombreUsuario(document.getElementById('usuario').value);
    var password =contrasenya(document.getElementById('password').value);
    if(nom && apellido && phoneNumber && email && usuario && password){
        alert('registro completado');
    }

}
function Correo(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}
function nombre(){
    const regex = /^[a-zA-Z]+$/u ;
    return regex.test(nom);
}
function Apellido(){
    const regex = /^[a-zA-Z]+$/u ;
    return regex.test(apellido);
}
function numerodeTelefono(){
    const regexTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return regexTelefono.test(phoneNumber);
}
function nombreUsuario(){
    const regexUsuario = /^[a-zA-Z0-9_]{3,16}$/;
    return regexUsuario.test(usuario);
}
function contrasenya(){
    const regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,}$/;
    return regexContrasena.test(password);
}
