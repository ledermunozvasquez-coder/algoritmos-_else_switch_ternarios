/*
  Ejercicio 3 - If / Else: Calificacion academica

  Declara una variable llamada "nota" con un valor entre 0 y 100.
  Usando if / else if / else, muestra la calificacion cualitativa del estudiante:
  - 90 a 100: "Excelente"
  - 70 a 89:  "Bueno"
  - 60 a 69:  "Suficiente"
  - 0 a 59:   "Insuficiente"
  Si la nota esta fuera del rango 0-100, muestra: "Nota invalida."
*/

let nota = 85;
if (nota >= 90 && nota <= 100) {
        console.log("Excelente");
    } else if (nota >= 70 && nota <= 89) {
        console.log("Bueno");
    } else if (nota >= 60 && nota <= 69) {
        console.log("Suficiente");
    } else if (nota >= 0 && nota <= 59) {
        console.log("Insuficiente");
    } else {
        console.log("Nota inválida.");
    }
