/*
  Ejercicio 8 - Ternario: Control de velocidad

  El limite de velocidad en una zona escolar es 30 km/h.
  Declara una variable "velocidad" con la velocidad actual del vehiculo en km/h.
  Usando el operador ternario, asigna a la variable "alerta"
  el mensaje correspondiente:
  - Si la velocidad es mayor a 30: "ALERTA: Exceso de velocidad."
  - Si no:                          "Velocidad dentro del limite."
  Imprime la velocidad y la alerta.
*/
// Ejercicio 8 - Ternario: Control de velocidad


let velocidad = 45;


let alerta = velocidad > 30
    ? "ALERTA: Exceso de velocidad."
    : "Velocidad dentro del límite.";


console.log("Velocidad: " + velocidad + " km/h");
console.log("Alerta: " + alerta);
