/*
  Ejercicio 10 - Ternario: Tarifa de parqueadero

  Un parqueadero cobra de forma diferente segun el tipo de vehiculo:
  - Moto:  $2.000 por hora
  - Carro: $5.000 por hora

  Declara una variable "esMoto" con valor true o false,
  y una variable "horas" con la cantidad de horas que el vehiculo estuvo parqueado.
  Usando el operador ternario, calcula la tarifa por hora y luego el total a pagar.
  Imprime el tipo de vehiculo, las horas parqueadas y el total.
*/

let esMoto = false; 
let horas = 8;    

let tarifaPorHora = esMoto ? 2000 : 5000;


let totalPagar = tarifaPorHora * horas;


console.log("Tipo de vehículo: " + (esMoto ? "Moto" : "Carro"));
console.log("Horas parqueadas: " + horas);
console.log("Tarifa por hora: $" + tarifaPorHora);
console.log("Total a pagar: $" + totalPagar);


