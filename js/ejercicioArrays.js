'use strict'

// pedir 6 numero por pantalla y meterlos en array, mostrar el array en la página y consola
//ordenarlo y mostrarlo 
//invertir su orden  y mostrarlo
//mostrar cuntos elementos tiene el array 
//buscar un elemento y mostrar si existe y la posicion del mismo

var contador = 0;
var arrayFinal = [];
while(contador < 6){
    var datos = prompt("Introduzca que desea en el array", "dato");
    arrayFinal.push(datos);
    contador++;
}
console.log("El array es: "+arrayFinal);
document.write("<br>El array es: "+arrayFinal+"<br>");

//-------------------------

var arrayOrdenado = arrayFinal.sort();

console.log("El array ordenado: "+arrayOrdenado);
document.write("<br>El array ordenado: "+arrayOrdenado+"<br>");

//-----------------------

var arrayInvertido = arrayFinal.reverse();

console.log("El array invertido: "+arrayInvertido);
document.write("<br>El array invertido: "+arrayInvertido+"<br>");

//-----------------------

var largoArray = arrayFinal.length;

console.log("El array tiene: "+largoArray+" elementos");
document.write("<br>El array tiene: "+largoArray+" elementos<br>");

//----------------------

var busqueda = prompt("Introduzca que desea buscar en el array", "dato");

var busquedaArray = arrayFinal.find(dato =>dato == busqueda);
var indice = arrayFinal.findIndex(dato2 => dato2 == busqueda); //siempre usar con funcion de calback
if (busqueda == busquedaArray) {
    console.log("La palabra a buscar: '"+busqueda+"' si está en el array en la posicion: "+indice);
    document.write("<br>La palabra a buscar: '"+busqueda+"' si está en el arrayen la posicion: <br>"+indice);
}else{
    console.log("La palabra a buscar: '"+busqueda+"' no está en el array");
    document.write("<br>La palabra a buscar: '"+busqueda+"' no está en el array<br>");
}


