/*
  Ejercicio 3 - Switch: Calculadora basica

  Declara dos variables numericas "num1" y "num2",
  y una variable "operador" con uno de estos valores: "+", "-", "*", "/".
  Usando switch, realiza la operacion indicada por el operador
  y guarda el resultado en la variable "resultado".
  Imprime la operacion completa y su resultado.
  En caso de division, verifica que num2 no sea cero antes de dividir.
  Si el operador no es valido, muestra: "Operador no reconocido."
*/

let num1 = 24;
let num2 = 4;
let operador = "/";
let resultado;

switch (operador) {
    case "+":
        resultado = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + resultado);
        break;
    case "-":
        resultado = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + resultado);
        break;
    case "*":
        resultado = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + resultado);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Error: no se puede dividir entre cero.");
        } else {
            resultado = num1 / num2;
            console.log(num1 + " / " + num2 + " = " + resultado);
        }
        break;
    default:
        console.log("Operador no reconocido.");
}
