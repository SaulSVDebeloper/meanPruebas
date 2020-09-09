'use strict'

/** crear tabla mustiplicar de un numero introducido por pantalla */

/* var number = parseInt(prompt("introduce un numero", 1));

for (var i= 1; i<=10; i++){
    document.write("<br>"+i+" x "+ number+" = "+ (i*number));
} */

/** todas las tablas de multiplicar */

var number = parseInt(prompt("introduce un número para hacer todas las tablas hasta dicho número", 1));
for (var c= 1; c<=10; c++) {
    document.write("<br><h2>tabla del "+ c+"</h2><br>")
    for (var i= 1; i<=10; i++){
        document.write("<br>"+i+" x "+ c+" = "+ (i*c));
    }
}