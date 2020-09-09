'use strict'

/** saber si es par o impar */

var numero = parseInt(prompt("introduzca un numero: ", 1));

while(isNaN(numero)){
    numero = parseInt(prompt("introduzca un numero: ", 1));
}

if (numero %2 == 0) {
    alert("el numero es par");   
}else{
    alert("el numero es impar");
}