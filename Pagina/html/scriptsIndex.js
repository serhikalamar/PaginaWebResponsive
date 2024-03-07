const botonCambiarTema = document.getElementById('cambiarTema');
const body = document.body;

botonCambiarTema.addEventListener('click', () => {
    // Cambiar entre los temas claro y oscuro
    body.classList.toggle('tema-claro');
});