/*
  Ejercicio 6 - Ternario: Recomendacion por temperatura

  Declara una variable "temperatura" con un valor en grados Celsius.
  Usando el operador ternario, asigna a la variable "recomendacion"
  el mensaje adecuado:
  - Si la temperatura es menor a 15: "Abrigate bien antes de salir."
  - Si no:                            "Puedes salir con ropa ligera."
  Imprime la recomendacion en consola.
*/

let temperatura = 8;
let recomendacion = temperatura < 15 ? "Abrígate bien antes de salir."
    : "Puedes salir con ropa ligera.";
    
console.log("Temperatura: " + temperatura + "°C");
console.log("Recomendación: " + recomendacion);


