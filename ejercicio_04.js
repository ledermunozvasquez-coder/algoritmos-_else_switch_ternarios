/*
  Ejercicio 4 - Switch: Color por inicial

  Declara una variable "inicial" con la letra inicial de un color en ingles
  (en mayuscula). Usando switch, muestra el nombre del color en español:
  - "R" → Rojo   (Red)
  - "G" → Verde  (Green)
  - "B" → Azul   (Blue)
  - "Y" → Amarillo (Yellow)
  - "W" → Blanco (White)
  - "K" → Negro  (Black)
  Si la inicial no corresponde a ninguno de estos colores,
  muestra: "Color no registrado."
*/

let color = "K" 

switch (color) {
    case "R":
        console.log("Rojo");
        break;
    case "G":
        console.log("Verde");
        break;
    case "B":
        console.log("Azul");
        break;
    case "Y":
        console.log("Amarillo");
        break;
    case "W":
        console.log("Blanco");
        break;
    case "K":
        console.log("Negro");
        break;
    default:
        console.log("Color no registrado.");
}



