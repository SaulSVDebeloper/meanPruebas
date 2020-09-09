'use strict'

// Bom o browser object model
function nuevaUrl(cambio){
    window.location.href = cambio;
} 
function ventanaNueva(nuevaVentana){
    //window.open(nuevaVentana);
    window.open(nuevaVentana,"","width=400,height=300");
} 

function getBom(){
    console.log(window.innerHeight); //nos da la altura de la página
    console.log(window.innerWidth); //nos da la ancho de la página
}

console.log(window.innerHeight); //nos da la altura de la página web
console.log(window.innerWidth); //nos da la ancho de la páginaweb

console.log(screen.height); //nos da la altura de la pantalla del usuario
console.log(screen.width); //nos da la ancho de la pantalla del usuario

console.log(window.location); //nos muestra la url cargada (objeto location)
console.log(window.location.href); //nos muestra la url cargada de dentro del objeto (objeto location)



