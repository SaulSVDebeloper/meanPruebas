'use straict'

/** Funciones */
var numero = parseInt(prompt("Elija el primer numero ", 1));
var numero2 = parseInt(prompt("Elija el segundo numero ", 1));
var hacer = prompt("escriba que desea hacer, sumar, restar, dividir, o multiplicar");
while(numero < 0 || numero2 < 0 || isNaN(numero)|| isNaN(numero2)){
    numero = parseInt(prompt("Elija el primer numero ", 1));
    numero2 = parseInt(prompt("Elija el segundo numero ", 1));
    hacer = prompt("escriba que desea hacer, sumar, restar, dividir, o multiplicar");
} 
var resultado = carlculadora(numero, numero2, hacer);
document.write("<br><h2>"+resultado+"</h2>")
function carlculadora(numero, numero2, hacer) {
    if (hacer == "sumar") {
        return ("El resultado de la suma es: "+ (numero + numero2));
    }else if (hacer == "restar") {
        return ("El resultado de la resta es: "+ (numero - numero2));
    }else if (hacer == "dividir") {
        return ("El resultado de la divición es: "+ (numero / numero2));
    } else if(hacer == "multiplicar") {
        return ("El resultado de la multiplicación es: "+ (numero * numero2));
    }else{
        return ("No puedo hacer ese calculo");
    }

}
