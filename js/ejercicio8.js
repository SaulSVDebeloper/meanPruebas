'use strict'

/** Calculadora JS */


var numero1 = parseInt(prompt("intriduzca el primer numero a calcular",1));
var numero2 = parseInt(prompt("intriduzca el segundo numero a calcular",1));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1)|| isNaN(numero2) || numero1 < numero2){
    numero1 = parseInt(prompt("intriduzca el primer numero a calcular",1));
    numero2 = parseInt(prompt("intriduzca el segundo numero a calcular",1));
}

var resultado = "<br>La suma es= "+ (numero1 + numero2)+"<br>"+
                "La resta es= "+ (numero1 - numero2)+"<br>"+
                "La multiplicacion= "+ (numero1 * numero2)+"<br>"+
                "la divicion= "+ (numero1 / numero2)+"<br>";
var resultadoCMD = "La suma es= "+ (numero1 + numero2)+"\n"+
                "La resta es= "+ (numero1 - numero2)+"\n"+
                "La multiplicacion= "+ (numero1 * numero2)+"\n"+
                "la divicion= "+ (numero1 / numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);