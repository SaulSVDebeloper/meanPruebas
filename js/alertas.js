'use strict'

//alertas

alert("esta es mi alerta");

//confirmacion

var resultado = confirm("quiere avandonar la página"); //pedirmos confirmacion y recogemos el resultado
console.log(resultado);
//ingreso de datos

var recogidaDatos = prompt("Cual es su nombre", 18); //recibe dos parametros el primero la string de pregunta y el valor por defecto y lo podemos meter en una variable para optener el resultado
console.log(recogidaDatos); //siempre recoge todos los datos como string, necesitas escapalor para su uso si es necesario