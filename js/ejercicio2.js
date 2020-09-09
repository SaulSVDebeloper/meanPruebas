'use strict'

var suma = 0;
var contador = 0;

do{
    var numero =parseInt( prompt("introduce numero hasta meter uno negativo",0));
    if (isNaN(numero)) {
        numero = 0;
    }else if (numero>=0) {
        suma += numero;
        contador++;
    }
}while (numero >= 0) {
    var resultado = suma/contador;
    alert("el resultado de la suma es "+suma);
    alert("el resultado de la media es "+resultado);
}