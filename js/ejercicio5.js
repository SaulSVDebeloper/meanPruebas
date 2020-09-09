'use strict'

/** 
 * muestra todos los divisores de un nuero introducido en un propmt 
*/
var numero = parseInt(prompt("introduce un numero: ", 1));

for( var i=1 ;i <= numero; i++){ 
    if (numero %i == 0) {//comprobamos los divisores
        console.log("divisor; "+i);
    }
}