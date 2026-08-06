/*
  Ejercicio 6 - If / Else: Tipo de triangulo

  Declara tres variables: "lado1", "lado2" y "lado3", con los valores
  de los lados de un triangulo.
  Usando if / else if / else, determina que tipo de triangulo es:
  - Equilatero:  los tres lados son iguales.
  - Isosceles:   exactamente dos lados son iguales.
  - Escaleno:    los tres lados son diferentes.
  Si la combinacion de lados no forma un triangulo valido
  (la suma de dos lados debe ser mayor que el tercero), muestra:
  "Los lados no forman un triangulo valido."
*/
let lado1 = 25;
let lado2 = 38;
let lado3 = 25;

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 &&lado2 + lado3 > lado1) {
if (lado1 === lado2 && lado2 === lado3) {
console.log("El triángulo es Equilátero.");
} else if (
lado1 === lado2 ||
lado1 === lado3 ||
lado2 === lado3 ) {
console.log("El triángulo es Isósceles."); 
} else {
console.log("El triángulo es Escaleno.");
}
} else {
console.log("Los lados no forman un triángulo válido.");
}









