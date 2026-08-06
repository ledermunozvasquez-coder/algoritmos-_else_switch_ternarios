/*
  Ejercicio 10 - If / Else: Acceso al sistema

  Un sistema requiere usuario y contrasena para ingresar.
  - Usuario correcto:    "admin"
  - Contrasena correcta: "sena2026"

  Declara las variables "usuario" y "contrasena" con los valores que
  el usuario intenta ingresar.
  Usando if / else if / else, verifica el acceso:
  - Si el usuario Y la contrasena son correctos: "Bienvenido al sistema."
  - Si el usuario es correcto pero la contrasena no: "Contrasena incorrecta."
  - Si el usuario no existe: "Usuario no encontrado."
*/

let usuario = "admin";
let contrasena = "sena2027";
if (usuario === "admin" && contrasena === "sena2026"){
console.log ("Bienvenido al sistema ");
}
else if (usuario === "admin" && contrasena !== "sena2026"){
console.log ("Contrasena incorrecta");
}
else {
console.log ("Usuario no encontrado");
}


