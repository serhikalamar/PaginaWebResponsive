let sliderInner = document.querySelector(".slider--inner");
let index = 1;
let imagenes = sliderInner.querySelectorAll("img");
setInterval(function(){
    let porcentaje = index * - 100;
    sliderInner.style.transform = "translateX(" + porcentaje +"%)";
    index++;
    if(index > (imagenes.length - 1)){
        index = 0;
    }
},3000);