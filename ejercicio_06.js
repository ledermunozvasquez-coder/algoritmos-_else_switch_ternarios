/*
  Ejercicio 6 - Switch: Tipo de transporte

  Declara una variable "ruedas" con la cantidad de ruedas de un vehiculo.
  Usando switch, determina e imprime el tipo de transporte:
  - 2 ruedas: "Bicicleta o motocicleta"
  - 3 ruedas: "Triciclo o motocarro"
  - 4 ruedas: "Automovil o camioneta"
  - 6 ruedas: "Camion pequeno"
  - 18 ruedas: "Tractocamion"
  Para cualquier otro numero, muestra: "Tipo de vehiculo desconocido."
*/

let = ruedas = 6;

switch (ruedas) {
case 2: 
console.log ("Bicicleta o motocicleta");
  break;
case 3: 
console.log ("Triciclo o motocarro");
  break;
case 4: 
console.log ("Automovil o camioneta");
  break;
case 6: 
console.log ("Camion pequeno");
  break
case 18: 
console.log ("Tractocamion");
default:
console.log ("Tipo de vehiculo desconocido.");

}