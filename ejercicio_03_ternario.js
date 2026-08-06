/*
  Ejercicio 3 - Ternario: Aprobo o reprobo

  Declara una variable "nota" con un valor entre 0 y 100.
  La nota minima para aprobar es 60.
  Usando el operador ternario, asigna a la variable "resultado"
  el texto "Aprobo" o "Reprobo" segun corresponda.
  Imprime el resultado junto con la nota obtenida.
*/

let nota = 61;

let resultado = nota >= 60 ? "Aprobo" : "Reprobo";

console.log("Nota: " + nota + " - " + resultado);
