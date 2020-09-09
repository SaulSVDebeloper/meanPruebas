'use strict'

/** parametros rest y spread */

//Rest

var fruta1 = "";
var fruta2 = "";

function listadoFrutas(fruta1,fruta2, ...restoFrutas){ //con los tres puntos llamamos al resto de los datos y los metemos en un array (parametro tipo rest '...restoFrutas')
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(restoFrutas);

}
//listadoFrutas("Naranja","Manzana","Sandia","Pera","Melón","Coco"); //llamada a la función

var frutas = ["Naranja","Manzana"] //parametros de tipo Srpead los añade como dos parametros nuevos al array inferior
listadoFrutas( ...frutas,"Sandia","Pera","Melón","Coco"); //mete los calores de frutas en fruta 1 y fruta 2
listadoFrutas( frutas,"Sandia","Pera","Melón","Coco"); //mete un array de dos datos al valor furta 1.