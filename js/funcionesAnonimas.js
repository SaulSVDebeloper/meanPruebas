'use Strict'

/** funciones anonimas: funciones sin nombre que se guardan en variables */

/* var pelicula = function(nombre){
    return ("<br>La pelicula es "+ nombre); 
}
document.write(pelicula("Santalicia")); */


//funcion de callback: es una funcion anonima que se le pasa como parametro a otra funcion

function sumame(numero1,numero2, sumaMuestra, sumaPorDos){
    var sumar = numero1+numero2;
    sumaMuestra(sumar);
    sumaPorDos(sumar);
    return "<br>El resultado es: "+sumar;
}

sumame(5,7, function(dato){  //funciones callback son las funciones sin nombre como parametro
console.log("la suma es: "+ dato);
},
function(dato){
    console.log("La suma por dos es: "+(dato*2));
}
);