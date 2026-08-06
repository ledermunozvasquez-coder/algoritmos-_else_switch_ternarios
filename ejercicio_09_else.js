/*
  Ejercicio 9 - If / Else: Clasificacion de temperatura

  Declara una variable "temperatura" con un valor en grados Celsius.
  Usando if / else if / else, clasifica la temperatura e imprime una recomendacion:
  - Menor a 0°C:        "Bajo cero. Ten cuidado con el hielo."
  - De 0°C a 14°C:      "Hace frio. Abrigate bien."
  - De 15°C a 24°C:     "Temperatura agradable. Disfruta el dia."
  - De 25°C a 34°C:     "Hace calor. Mantente hidratado."
  - Mayor o igual a 35°C: "Calor extremo. Evita el sol directo."
*/

let temperatura = 32;

console.log("La Temperatura es:", temperatura + "°C");

// Clasificar la temperatura
if (temperatura < 0) {
    console.log("Bajo cero. Ten cuidado con el hielo.");
} 
else if (temperatura >= 0 && temperatura <= 14) {
    console.log("Hace frío. Abrígate bien.");
} 
else if (temperatura >= 15 && temperatura <= 24) {
    console.log("Temperatura agradable. Disfruta el día.");
} 
else if (temperatura >= 25 && temperatura <= 34) {
    console.log("Hace calor. Mantente hidratado.");
} 
else {
    console.log("Calor extremo. Evita el sol directo.");
}











