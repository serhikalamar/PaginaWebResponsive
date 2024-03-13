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
function validacion(){


}
function Correo(){
    var email = document.getElementById("email").value;
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