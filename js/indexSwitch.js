'use strict'
// Switch

var num1 = 40;
var imprime = "";

switch(num1){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "crisis de los curenta";
    break;
    case 75:
        imprime = "Ya eres un anciano";
    break;
    default:
        imprime = "tu edad es neutra";
    break;
}
console.log(imprime);