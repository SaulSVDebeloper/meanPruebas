'use strict'

//bucle while

var year = 2018;


while (year <= 2021){
 console.log("estamos en el año"+year);
 year++;
}
while (year >= 2011){
   /*  if (year == 2013) {
        break; //nos ayuda a terminar el bucle
    } */
 console.log("estamos en el año"+year);
 year--;

}


//do while (haz esto, mientras algo)

year = 30;
do{
    alert("solo cuando sea diferente")
    year--;
}while(year > 25)