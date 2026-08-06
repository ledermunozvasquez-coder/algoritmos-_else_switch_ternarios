/*
  Ejercicio 1 - Switch: Dia de la semana

  Declara una variable "dia" con un numero del 1 al 7,
  donde 1 representa el lunes y 7 el domingo.
  Usando switch, asigna a la variable "nombreDia" el nombre
  del dia correspondiente en español.
  Si el numero esta fuera del rango 1-7, asigna "Dia invalido".
  Imprime el resultado.
*/

let dia = 5;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miercoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sabado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Dia invalido";
}

console.log("El dia " + dia + " es: " + nombreDia);
