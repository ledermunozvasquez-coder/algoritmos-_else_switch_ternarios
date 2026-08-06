/*
  Ejercicio 5 - Switch: Estacion del año

  Declara una variable "mes" con un numero del 1 al 12.
  Usando switch con casos agrupados, determina la estacion del año
  correspondiente (para el hemisferio sur de Colombia / America del Sur):
  - Diciembre, Enero, Febrero (12, 1, 2):       "Verano"
  - Marzo, Abril, Mayo (3, 4, 5):               "Otono"
  - Junio, Julio, Agosto (6, 7, 8):             "Invierno"
  - Septiembre, Octubre, Noviembre (9, 10, 11): "Primavera"
  Imprime el mes y la estacion correspondiente.
*/

let mes = 8;
let estación; 

console.log ("El mes " + mes + " corresponde a la estacion de: ");

switch (mes) {
  case 1: 
  case 2: 
  console.log ("Verano ");
  break;

  case 3: "Otono";
  case 4: "Otono";
  case 5: "Otono";
  console.log  ("Otono ");
  break;

  case 6: "Invierno";
  case 7: "Invierno";
  case 8: "Invierno";
  console.log ("Invierno ");
  break;

  case 9: "Primavera";
  case 10: "Primavera";
  case 11: "Primavera";
  console.log ("Primavera ");
 
}
