/*
  Ejercicio 10 - Switch: Signo zodiacal

  Declara una variable "mes" con el mes de nacimiento de una persona (1 al 12).
  Usando switch con casos agrupados, determina el signo zodiacal.
  (Se usa el primer signo que cubre la mayor parte del mes para simplificar.)

  1  → Capricornio
  2  → Acuario
  3  → Piscis
  4  → Aries
  5  → Tauro
  6  → Geminis
  7  → Cancer
  8  → Leo
  9  → Virgo
  10 → Libra
  11 → Escorpio
  12 → Sagitario

  Imprime el mes de nacimiento y el signo zodiacal correspondiente.
*/

let mes = 2;
console.log ("El mes " + mes + " corresponde al signo zodiacal de: ");

switch (mes) {
case 1: signo = "Capricornio";
console.log ("Capricornio");
break;

case 2: signo = "Acuario";
console.log ("Acuario");
break;

case 3: signo = "Piscis";
console.log ("Piscis");
break;

case 4: signo = "Aries";
console.log ("Aries");
break;

case 5: signo = "Tauro";
console.log ("Tauro");
break;

case 6: signo = "Geminis";
console.log ("Geminis");
break;

case 7: signo = "Cancer";
console.log ("Cancer");
break;

case 8: signo = "Leo";
console.log ("Leo");
break;

case 9: signo = "Virgo";
console.log ("Virgo");
break;

case 10: signo = "Libra";
console.log ("Libra");
break;

case 11: signo = "Escorpio";
console.log ("Escorpio");
break;

case 12: signo = "Sagitario";
console.log ("Sagitario");

default: signo = ("Mes Invalido");
console.log ("Mes Invalido");

}

