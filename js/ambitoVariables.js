'use strict'


/** ambito variables */

function holamundo(texto){
    var holaAtodos= "hola a todos"; //puedo llamarla dentro de lafuncion pero no fuera
    console.log(texto);
    console.log(numero.toString()); //puedo acceder a las variable creadas fuera de funcion
    //console.log(typeof numero.toString()); //typeof nos muestra el tipo de la variable seleccionada
}

var numero = 15;
var texto = "Hola soy un avarible global";
holamundo(texto);