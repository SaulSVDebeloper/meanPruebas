'use strict'

// Arrays, Matrices


var nombres = ["antonio","pepe","jose","pepita"];

var lenguaje = ["php","java","spring","js"];

var elemento = parseInt(prompt("introduzca la pocicion del elemento: ",0));

console.log(nombres);
console.log(lenguaje);

console.log(lenguaje[2]); // mostramos un elemento del array en concreto
if (elemento >= nombres.length) {
    alert("introduce un numero adecuado menor que: " + nombres.length);
}else{
    console.log(nombres[elemento]); 
}


for(var i = 0; i < nombres.length; i++){
    document.write("<br>"+nombres[i]+",");
}

lenguaje.forEach((elemento)=>{
    document.write("<br>"+elemento+",");
});