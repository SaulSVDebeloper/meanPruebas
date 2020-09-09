'use strict'


/** Plantillas de Texto */

var nombre =prompt("Dame tu nombre: ");
var apellidos = prompt("Dame tus apellidos");
var textoTotal = "<br> mi nombre es "+nombre+" y mis apellidos "+apellidos;
var textoPlantilla = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}<h3>
`; // escribimos gran cantidad de texto de forma cómoda creando una plantilla

document.write(textoTotal);
document.write(textoPlantilla);