'use strict'


//Dom: uso de las etiquetas de html para trabjar con la info

//CONSEGUIMOS ELEMENTOS POR CLASES O ID ETC

//var caja = document.getElementById("miCaja"); //metemos en una variable el valor de la id
var caja = document.querySelector("#miCaja"); //metemos en una variable el valor de la 'id' pero de otra manera
//var caja = document.querySelector(".miCaja"); //metemos en una variable el valor si es una 'clase'

var cajahtml = document.getElementById("miCaja").innerHTML; //metemos en una variable el texto o dato que está dentro del div

console.log(caja);
console.log(cajahtml);


function cambioColor (color) {
    caja.style.background = color;
}

caja.innerHTML = "Ahora soy una caja modifiada desde JS"; //metemos un nuevo texto en el div
var cajahtml = document.getElementById("miCaja").innerHTML; //metemos en una variable el texto o dato que está dentro del div

caja.className = "Hola"; // con esto le añadimos una clase 
caja.style.color = "blue";
caja.style.padding = "30px";
console.log(caja);
console.log(cajahtml);


// CONSEGUIR ELEMENTOS POR SU ETIQUETA

var etiquetaDiv = document.getElementsByTagName('div');

var etiketaDiv2 = etiquetaDiv[2].style.background = "red";

// recorrer todos los div del docemtento html

var hr = document.createElement("hr");
 
var valor;
for (valor in etiquetaDiv){
    if (typeof etiquetaDiv[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(etiquetaDiv[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miSeccion").prepend(parrafo);
    }
}

miSeccion.append(hr);

console.log(etiquetaDiv);  
console.log(etiketaDiv2);  


//conseguir elementos por su clase 

var clasesDiv = document.getElementsByClassName("amarillo");
var clasesDiv2 = document.getElementsByClassName("rojo");

//clasesDiv2[1].style.background = "blue";
clasesDiv2[0].style.background = "brown";

for (var i  = 0; i <= clasesDiv2.length; i++){
    if (i == 1) {
        clasesDiv2[i].style.background = "blue";
    }
} 

console.log(clasesDiv);
console.log(clasesDiv2); //en este caso nos devuelve un array con los dos elementos de la misma clase


// Query Selector : solo recomendable para una sola cosa, id, clase


var id  = document.querySelector("#miCaja3"); // id


var id  = document.querySelector(".rojo"); // clase, no saca el array de los dos si no que solo uno
var idTodos = document.querySelectorAll(".rojo"); // con este metodo seleccionamos todos y nos devuelve un array
console.log(id);
console.log(idTodos);