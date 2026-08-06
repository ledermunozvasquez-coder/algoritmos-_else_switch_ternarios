/*
  Ejercicio 2 - Ternario: Mayor o menor de edad

  Declara una variable "edad" con un valor numerico.
  Usando el operador ternario, asigna a la variable "estado"
  el texto "mayor de edad" si la edad es >= 18, o "menor de edad" si no.
  Imprime: "La persona es mayor de edad." o "La persona es menor de edad."
*/

let edad = 16;

let estado = edad >= 18 ? "mayor de edad" : "menor de edad";

console.log("La persona es " + estado + ".");
