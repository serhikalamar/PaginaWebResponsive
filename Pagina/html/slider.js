let sliderInner = document.querySelector(".slider--inner"); //selecionamos la etiqueta div con esa clase.
let index = 1; //necesitamos saber que index llevamos
let imagenes = sliderInner.querySelectorAll("img"); //
//creamos un intervalo que va transforma el div en la posicion de la imagen y va sumando hasta llegar al ultimo y vuelve a empezar
setInterval(function(){
    let porcentaje = index * - 100;
    sliderInner.style.transform = "translateX(" + porcentaje +"%)";
    index++;
    if(index > (imagenes.length - 1)){
        index = 0;
    }
},3000);