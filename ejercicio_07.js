/*
  Ejercicio 7 - Switch: Calificacion en letras

  En algunos sistemas educativos la nota numerica se convierte en letra.
  Declara una variable "nota" con un valor entero entre 0 y 10.
  Usando switch, convierte la nota a su equivalente en letra:
  - 10:      "A+"
  - 9:       "A"
  - 8:       "B"
  - 7:       "C"
  - 6:       "D"
  - 5 o menos: "F - Reprobado"
  Para notas fuera del rango 0-10, muestra: "Nota invalida."

  Pista: agrupa los casos 0 a 5 para mostrar "F - Reprobado".
*/

let = nota = 10;

switch (nota) {
case 10: 
  console.log("A+");
  break;
case 9: 
  console.log("A");
  break;
case 8: 
  console.log("B");
  break;
case 7: 
  console.log("C");
  break;
case 6: 
  console.log("D");
  break;
case 5:
case 4:
case 3:
case 2:
case 1:
case 0:

console.log("F - Reprobado");
}


