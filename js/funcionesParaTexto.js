'use strict'


/** Funciones para texto "Métodos" tranformamos cadenas o texto*/
var numero = 444;
var texto ="bienvenido al curso de javaScript";
var texto2 = "es muy buen curso";

//convertir a string

var dato = numero.toString();
var dato2 = texto.toUpperCase();
var dato3 = texto2.toLowerCase();
var datoLargo = texto.length; //comprobamos el largo de la string
var array = ["1","2","3"];
var textoTotal = texto.concat(" "+texto2); //el metodo concat funciona igual que el + para concatenar

typeof console.log(dato);
console.log(dato2);
console.log(dato3);
console.log(datoLargo);
console.log(array.length);
console.log(textoTotal);


