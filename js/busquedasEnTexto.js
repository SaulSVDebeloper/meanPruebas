'use strict'


/** Funciones para busquedas en texto */
var numero = 444;
var texto ="bienvenido al curso de javaScript";
var texto2 = "es muy buen curso";
var textoTotal = texto+" "+texto2;

var busqueda = texto.indexOf("curso"); //nos devuelve la posicion de la palabra si esta en la string
var busqueda2 = texto.search("curso"); // lo mismo que el indexof
var busqueda3 = texto.match("curso"); // nos da un array explicativo de donde encontro la palabra etc
var busqueda4 = textoTotal.match(/curso/g); // nos da un array explicativo de donde encontro la palabra etc pero hace una busqueda global
var busqueda5 = textoTotal.substr(14, 5); // nos muestra desde el punto A, x numero de caracteres hacia delante
var busqueda6 = textoTotal.charAt(24); //nos muestra la letra que este en la posicion indicada
var busqueda7 = textoTotal.startsWith("curso"); //nos comprueba si existe esa palabra al inicio de la string y devuelve true o false
var busqueda8 = texto.endsWith("curso"); //nos comprueba si existe esa palabra al final de la string y devuelve true o false
var busqueda9 = textoTotal.includes("javaScript"); //nos comprueba si exsite esa palabra en la string

/** TODOS LOS METODOS SON KEYSENSITIVE, CUIDADO CON LAS MAYUSCULAS Y MINÚSCULAS */

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);