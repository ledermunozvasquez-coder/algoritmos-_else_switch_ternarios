/*
  Ejercicio 1 - Ternario: Par o impar

  Declara una variable "numero" con cualquier valor entero.
  Usando el operador ternario, determina si el numero es par o impar
  y guarda el resultado en una variable llamada "resultado".
  Imprime: "El numero X es par." o "El numero X es impar."
  (reemplaza X con el valor de la variable)
*/

let numero = 14;

let resultado = numero % 2 === 0 ? "par" : "impar";

console.log("El numero " + numero + " es " + resultado + ".");

