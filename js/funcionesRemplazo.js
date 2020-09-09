'use strict'


/** Funciones de remplazo en el texto */
var numero = 444;
var texto ="bienvenido al curso de javaScript";
var texto2 = "es muy buen curso";
var textoTotal = texto+" "+texto2;
var textoTotal2 = "          "+texto+" "+texto2+"           ";

var remplazar = textoTotal.replace("javaScript", "MeanStack"); //cambiamos el primer parametro existente en la string por el nuevo "segundo parametro"
var remplazar2 = textoTotal.slice(14); //nos corta la string desde la posicion introducida si ponemos dos parametros nos corta ese pedaso y lo muestra (14,20)
var remplazar3 = texto.split(" "); //nos crea un array separado por lo que querramos en mi caso espacio
var remplazar4 = textoTotal2.trim(); //nos quitas los espacion por delante y por detras

console.log(remplazar);
console.log(remplazar2);
console.log(remplazar3);
console.log(remplazar4);