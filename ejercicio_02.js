/*
  Ejercicio 2 - Switch: Dias del mes

  Declara una variable "mes" con un numero del 1 al 12.
  Usando switch, determina cuantos dias tiene ese mes
  (asume que febrero siempre tiene 28 dias).
  Imprime el nombre del mes y la cantidad de dias.

  Pista: puedes agrupar los casos que comparten la misma cantidad de dias.
  - 31 dias: enero(1), marzo(3), mayo(5), julio(7), agosto(8), octubre(10), diciembre(12)
  - 30 dias: abril(4), junio(6), septiembre(9), noviembre(11)
  - 28 dias: febrero(2)
*/

let mes = 4;
let diasDelMes;
let nombreMes;

switch (mes) {
    case 1:  nombreMes = "Enero";      diasDelMes = 31; break;
    case 2:  nombreMes = "Febrero";    diasDelMes = 28; break;
    case 3:  nombreMes = "Marzo";      diasDelMes = 31; break;
    case 4:  nombreMes = "Abril";      diasDelMes = 30; break;
    case 5:  nombreMes = "Mayo";       diasDelMes = 31; break;
    case 6:  nombreMes = "Junio";      diasDelMes = 30; break;
    case 7:  nombreMes = "Julio";      diasDelMes = 31; break;
    case 8:  nombreMes = "Agosto";     diasDelMes = 31; break;
    case 9:  nombreMes = "Septiembre"; diasDelMes = 30; break;
    case 10: nombreMes = "Octubre";    diasDelMes = 31; break;
    case 11: nombreMes = "Noviembre";  diasDelMes = 30; break;
    case 12: nombreMes = "Diciembre";  diasDelMes = 31; break;
    default: nombreMes = "Mes invalido"; diasDelMes = 0;
}

console.log(nombreMes + " tiene " + diasDelMes + " dias.");

