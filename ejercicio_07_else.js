/*
  Ejercicio 7 - If / Else: Precio de entrada al cine

  Un cine cobra las entradas segun la edad del espectador:
  - Menores de 5 años:        entrada GRATIS
  - De 5 a 11 años (niño):   $8.000
  - De 12 a 64 años (adulto): $15.000
  - 65 años o mas (senior):   $9.000

*/


let edad = 11

if (edad < 5){
console.log("La entrada es GRATIS");
} else if (edad >=5 && edad <=11){
console.log("La Entrada cuesta $8000");
} else if (edad >=12 && edad <=64) {
console.log("La Entrada cuesta $15000");
} else {
console.log("La Entrada cuesta $9000");
}














