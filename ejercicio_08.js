/*
  Ejercicio 8 - Switch: Planetas del sistema solar

  Declara una variable "numeroPlaneta" con un valor del 1 al 8,
  donde 1 es el planeta mas cercano al sol.
  Usando switch, muestra el nombre del planeta correspondiente:
  1 → Mercurio
  2 → Venus
  3 → Tierra
  4 → Marte
  5 → Jupiter
  6 → Saturno
  7 → Urano
  8 → Neptuno
  Para cualquier otro numero, muestra: "No es un planeta del sistema solar."
*/

let numeroPlaneta = 8;
console.log("El planeta numero " + numeroPlaneta + " es: ");

switch (numeroPlaneta) {
  case 1: console.log("Mercurio");
  break;
  case 2: console.log("Venus");
  break;
  case 3: console.log("Tierra");
  break;
  case 4: console.log("Marte");
  break;
  case 5: console.log("Jupiter");
  break;
  case 6: console.log("Saturno");
  break;
  case 7: console.log("Urano");
  break;
  case 8: console.log("Neptuno");
  break;
  default: console.log("No es un planeta del Sistema Solar.")

}

