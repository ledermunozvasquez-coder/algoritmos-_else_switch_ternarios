/*
  Ejercicio 9 - Switch: Tipo de comida por numero

  Un restaurante tiene un menu numerado. Declara una variable "opcion"
  con el numero del plato elegido por el cliente.
  Usando switch, muestra el nombre del plato y su precio:
  1 → "Bandeja paisa"       - $18.000
  2 → "Ajiaco bogotano"     - $15.000
  3 → "Sancocho de gallina" - $14.000
  4 → "Arroz con pollo"     - $12.000
  5 → "Sopa de lentejas"    - $10.000
  Si el numero no esta en el menu, muestra: "Opcion no disponible en el menu."
*/

let opcion = 5;

switch (opcion) {
  case 1: ("Bandeja Paisa cuesta $18.000");
  console.log ("Bandeja Paisa cuesta $18.000");
  break;
  case 2: ("Ajiaco Bogotano cuesta $15.000");
  console.log("Ajiaco Bogotano cuesta $15.000");
  break;
  case 3: ("Sancocho de gallina cuesta $14.000");
  console.log("Sancocho de gallina cuesta $14.000");
  break;
  case 4: ("Arroz con pollo cuesta $12.000");
  console.log("Arroz con pollo cuesta $12.000");
  break;
  case 5: ("Sopa de lentejas cuesta $10.000");
  console.log("Sopa de lentejas cuesta $10.000");
  break;
  default:
  console.log("Opcion no disponible en el menu.");
}





