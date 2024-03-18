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
function validacion(){
    var nom = nombreApellido(document.getElementById('nom').value);
    var apellido = nombreApellido(document.getElementById('Apellido').value);
    var phoneNumber = numerodeTelefono(document.getElementById('phoneNumber').value);
    var email = Correo(document.getElementById("email").value);
    var usuario = nombreUsuario(document.getElementById('usuario').value);
    var password =contrasenya(document.getElementById('password').value);
    if(nom && apellido && phoneNumber && email && usuario && password){
        alert('registro completado');
    }

}
function Correo(){
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
    }
}
function nombreApellido(){

}
function numerodeTelefono(){

}
function nombreUsuario(){

}
function contrasenya(){
    
}
