/*
  Ejercicio 5 - Ternario: Precio con descuento VIP

  Una tienda ofrece descuentos segun el tipo de cliente:
  - Cliente VIP:    descuento del 20%
  - Cliente normal: descuento del 5%

  Declara una variable "esVIP" con valor true o false,
  y una variable "precioBase" con el precio original del producto.
  Usando el operador ternario, calcula el porcentaje de descuento,
  luego calcula el precio final e imprime ambos valores.
*/

let esVIP = true;
let precioBase = 5000;
let descuento = esVIP ? precioBase * 0.20 : precioBase * 0.05;
let precioFinal = precioBase - descuento;


console.log("El precio base es: $" + precioBase);
console.log("El descuento es: "  + descuento + "%");
console.log("El precio final es: $" + precioFinal);

