'use strict'

/* programa que pide dos numeros y que nos diga cual es menos y cual meyor o si son iguales*/

var numero1 = parseInt(prompt("indica el primer número",0));
var numero2 = parseInt(prompt("indica el segundo número",0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("indica el primer número",0));
    numero2 = parseInt(prompt("indica el segundo número",0));
}

if (numero1 == numero2) {
    alert(numero1+" es igual que "+numero2);
}else if (numero1 > numero2) {
    alert(numero1+" es mayor que "+numero2); 
}else if (numero1 < numero2) {
    alert(numero2+" es mayor que "+numero1); 
}