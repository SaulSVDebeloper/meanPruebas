'use strict'

//Eventos Ratón

//Envento Click

//var boton = document.querySelector("#boton");

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background ="green";
    }
    boton.style.padding = "10px";
    boton.style.border = "2px solid #ccc"
    return true;
}

var boton = document.querySelector("#boton");

boton.addEventListener("click", function(){ //usando este método no tenemos que poner el evento click en el html
    cambiarColor();
});

//Evento mouse over

function cambiarColor2(){
    var bg = boton2.style.background;
    if(bg == "green"){
        boton2.style.background = "blue";
    }else{
        boton2.style.background ="green";
    }
    boton2.style.padding = "10px";
    boton2.style.border = "2px solid #ccc"
    return true;
}

var boton2 = document.querySelector("#botonPasar");

boton2.addEventListener("mouseover", function(){ //usando este método no tenemos que poner el evento click en el html
    cambiarColor2();
});
