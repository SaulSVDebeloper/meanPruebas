'use strict'

var numero1 = parseInt(prompt("introduzca el primer numero",0));
var numero2 = parseInt(prompt("introduzca el segundo numero",0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos números;<h1>");
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}