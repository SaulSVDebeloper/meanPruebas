'use Strict'

var categoria = ["accion", "terror", "comedia"];
var peliculas = ["la verdad duele", "la vida es vella", "gran torino", "la casa de papel"];

var cine = [categoria,peliculas];

console.log(cine);
/* console.log(cine[0][1]); // las dos mimenciones del array
console.log(cine[1][2]); */ // las dos mimenciones del array

// Operaciones con array

//peliculas.push("batman");
//console.log(peliculas);

var elemento = prompt("intrduzca elemento para añadir al array y termine introduciendo 'acabar'", "acabar");
do{
    elemento = prompt("intrduzca elemento para añadir al array y termine introduciendo 'acabar'", "acabar");
    if (elemento != "acabar") {
        peliculas.push(elemento);
    }
}while(elemento != "acabar");

//peliculas.pop(); //elimina el último elemento del array
console.log(peliculas);

 //sacar un elemento del array 

 var indice = peliculas.indexOf("la verdad duele");
 if (indice > -1) {
     peliculas.splice(indice, 1);  
 }
 console.log(peliculas);

 //convertir una arra en una string

 var stringArray  = peliculas.join();

 console.log(stringArray);

 //convertir de string a array 

 var cadena = "Hola, adios, algunos, pocos";

 var arrayCadena = cadena.split(", ");
 console.log(arrayCadena);


 // Ordenar arrays de una manera concreta

var peliculasOrdenado = peliculas.sort(); //ordenar por orden alfabétivo
console.log(peliculasOrdenado);

// das la vuelta al array

var peliculasVuelta = peliculas.reverse();
console.log(peliculasVuelta);

//recorrer con for in

for (let i in peliculas){
    document.write("<h3>"+peliculas[i]+"</h3>");
}


//busquedas en el array

var busquedaArray = peliculas.find(function(dato){
    return dato == "la casa de papel";
});
console.log(busquedaArray+" ,esta pelicula");

//busquedas en el array con funcion de flecha
var busquedaArray2 = peliculas.find(dato =>dato == "la casa de papel");
console.log(busquedaArray2+" ,esta pelicula");