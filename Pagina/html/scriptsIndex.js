// cambio de tema de claro a oscuro y viceversa y cambiar el texto del boton
var toggleThemeButton = document.getElementById('toggle-theme-btn');


toggleThemeButton.addEventListener('click', function() {
  
    document.body.classList.toggle('tema-oscuro');
   
    var isDarkMode = document.body.classList.contains('tema-oscuro');
    

    if (isDarkMode) {
        toggleThemeButton.textContent = 'Tema claro';
    } else {
        toggleThemeButton.textContent = 'Tema oscuro';
    }
});