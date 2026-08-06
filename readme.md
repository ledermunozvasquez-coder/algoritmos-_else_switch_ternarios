# Estructuras Condicionales en JavaScript

Las estructuras condicionales permiten que un programa tome decisiones y ejecute diferentes bloques de codigo segun si una condicion es verdadera o falsa. Son fundamentales para que los programas puedan responder de manera distinta ante diferentes situaciones.

---

## 1. Sentencia `if`

### ¿Que es?

La sentencia `if` (si) evalua una condicion. Si la condicion es **verdadera** (`true`), ejecuta el bloque de codigo que contiene. Si es **falsa** (`false`), simplemente lo omite.

### Sintaxis

```javascript
if (condicion) {
    // codigo que se ejecuta si la condicion es verdadera
}
```

### Ejemplo

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
```

### ¿Como funciona?

1. El programa evalua la condicion dentro de los parentesis.
2. Si el resultado es `true`, entra al bloque y ejecuta las instrucciones.
3. Si el resultado es `false`, salta el bloque y continua con el resto del programa.

### Ejercicios propuestos

1. Escribe un programa que tenga la temperatura del dia en una variable. Si es mayor a 30 grados, muestra el mensaje: `"Hace calor hoy."`.
2. Declara una variable con un numero. Si el numero es mayor que 100, imprime `"El numero es grande."`.
3. Declara una variable con el saldo de una cuenta bancaria. Si es mayor o igual a 0, muestra `"Cuenta en regla."`.

---

## 2. Sentencia `if / else`

### ¿Que es?

La sentencia `else` (si no) complementa al `if`. Cuando la condicion del `if` es **falsa**, el programa ejecuta el bloque del `else`. Siempre se ejecuta uno u otro, nunca ambos.

### Sintaxis

```javascript
if (condicion) {
    // codigo si la condicion es verdadera
} else {
    // codigo si la condicion es falsa
}
```

### Ejemplo

```javascript
let nota = 65;

if (nota >= 60) {
    console.log("Aprobaste el examen.");
} else {
    console.log("Reprobaste el examen.");
}
```

### Variante: `if / else if / else`

Cuando hay mas de dos posibilidades, se pueden encadenar multiples condiciones con `else if`:

```javascript
let nota = 75;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Bueno");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}
```

### Ejercicios propuestos

1. Declara una variable con la edad de una persona. Si es mayor o igual a 18, muestra `"Puedes votar."`, de lo contrario muestra `"Aun no puedes votar."`.
2. Declara dos variables con numeros distintos. Muestra cual de los dos es el mayor, o si son iguales.
3. Declara una variable con un numero. Determina si es positivo, negativo o cero e imprime el resultado.
4. Declara una variable con la nota de un estudiante (0 a 100) y muestra su calificacion: Excelente (90-100), Bueno (70-89), Suficiente (60-69), Insuficiente (0-59).

---

## 3. Operador Ternario

### ¿Que es?

El operador ternario es una forma **compacta** de escribir un `if / else` en una sola linea. Es util cuando la decision es simple y el resultado se asigna directamente a una variable o se muestra en pantalla.

### Sintaxis

```javascript
variable = condicion ? valor_si_verdadero : valor_si_falso;
```

### Ejemplo

```javascript
// Con if/else normal:
let edad = 20;
let estado;
if (edad >= 18) {
    estado = "mayor de edad";
} else {
    estado = "menor de edad";
}

// Con operador ternario — hace exactamente lo mismo en una sola linea:
let estado = edad >= 18 ? "mayor de edad" : "menor de edad";

console.log(estado); // mayor de edad
```

### ¿Cuando usarlo?

- Cuando la condicion y los resultados son simples y cortos.
- Cuando se quiere asignar un valor a una variable segun una condicion.
- **Evitar** usarlo cuando la logica es compleja, ya que dificulta la lectura del codigo.

### Ejercicios propuestos

1. Usando el operador ternario, determina si un numero es par o impar e imprime el resultado.
2. Declara una variable con la temperatura. Usando el operador ternario, asigna a otra variable el mensaje `"Abrigate"` si es menor a 15 grados, o `"Vista ligero"` si no lo es. Imprime la variable.
3. Declara una variable `esVIP` con valor `true` o `false`. Usando el operador ternario, calcula el precio final de un producto de $100.000: si es VIP aplica 20% de descuento, si no aplica 5%.

---

## 4. Sentencia `switch`

### ¿Que es?

La sentencia `switch` (interruptor) evalua una expresion y la compara con multiples casos posibles. Es una alternativa mas ordenada al `if / else if / else` cuando se tienen muchas opciones basadas en el **valor exacto** de una variable.

### Sintaxis

```javascript
switch (expresion) {
    case valor1:
        // codigo si expresion === valor1
        break;
    case valor2:
        // codigo si expresion === valor2
        break;
    default:
        // codigo si ninguno de los casos coincide
}
```

> **Importante:** La palabra `break` detiene la ejecucion del `switch` despues de encontrar un caso coincidente. Si se omite, el programa continuara ejecutando los casos siguientes hasta encontrar un `break` o llegar al final del `switch`.

### Ejemplo

```javascript
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
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

console.log(nombreDia); // Miercoles
```

### Casos agrupados

Se pueden agrupar casos que comparten el mismo resultado omitiendo el `break` entre ellos:

```javascript
let mes = 4;
let estacion;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Verano";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Otono";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Mes invalido";
}

console.log(estacion); // Otono
```

### Ejercicios propuestos

1. Declara una variable con un numero del 1 al 7. Usando `switch`, muestra el nombre del dia de la semana correspondiente.
2. Declara una variable con el numero de un mes (1 al 12). Usando `switch`, muestra cuantos dias tiene ese mes (puedes asumir que febrero tiene 28 dias).
3. Crea una calculadora basica: declara dos variables numericas y una variable con un operador (`"+"`, `"-"`, `"*"`, `"/"`). Usa `switch` para realizar la operacion correspondiente y muestra el resultado.
4. Declara una variable con la inicial de un color en ingles (`"R"` para Red, `"G"` para Green, `"B"` para Blue, `"Y"` para Yellow). Usando `switch`, muestra el nombre del color en español.

---

## Resumen comparativo

| Estructura     | Cuando usarla                                                    |
|----------------|------------------------------------------------------------------|
| `if`           | Cuando hay una sola condicion que verificar                      |
| `if / else`    | Cuando hay dos caminos posibles (verdadero o falso)              |
| `else if`      | Cuando hay multiples condiciones encadenadas                     |
| Ternario `? :` | Para asignaciones simples con condicion en una sola linea        |
| `switch`       | Cuando se compara una variable contra multiples valores exactos  |

---

## Buenas practicas

- Usa `switch` cuando compares una variable contra muchos valores fijos; usa `if/else` cuando las condiciones son rangos o expresiones complejas.
- El operador ternario es util, pero no lo anides: si necesitas mas de uno encadenado, usa `if/else` para mantener la legibilidad.
- Siempre incluye el `default` en un `switch` para manejar valores inesperados.
- No olvides el `break` en cada caso del `switch`, a menos que intencionalmente quieras agrupar casos.
- Escribe las condiciones de forma clara; si una condicion es dificil de leer, considera asignarla a una variable con un nombre descriptivo antes del `if`.

---

## Listado de ejercicios

### if / else — [`if_else/`](if_else/)

| Archivo | Tema |
|---------|------|
| [ejercicio_01.js](if_else/ejercicio_01.js) | Derecho al voto |
| [ejercicio_02.js](if_else/ejercicio_02.js) | Positivo, negativo o cero |
| [ejercicio_03.js](if_else/ejercicio_03.js) | Calificacion academica |
| [ejercicio_04.js](if_else/ejercicio_04.js) | Descuento por monto de compra |
| [ejercicio_05.js](if_else/ejercicio_05.js) | Año bisiesto |
| [ejercicio_06.js](if_else/ejercicio_06.js) | Tipo de triangulo |
| [ejercicio_07.js](if_else/ejercicio_07.js) | Precio de entrada al cine |
| [ejercicio_08.js](if_else/ejercicio_08.js) | Indice de Masa Corporal (IMC) |
| [ejercicio_09.js](if_else/ejercicio_09.js) | Clasificacion de temperatura |
| [ejercicio_10.js](if_else/ejercicio_10.js) | Acceso al sistema |

### Ternario — [`ternario/`](ternario/)

| Archivo | Tema |
|---------|------|
| [ejercicio_01.js](ternario/ejercicio_01.js) | Par o impar |
| [ejercicio_02.js](ternario/ejercicio_02.js) | Mayor o menor de edad |
| [ejercicio_03.js](ternario/ejercicio_03.js) | Aprobo o reprobo |
| [ejercicio_04.js](ternario/ejercicio_04.js) | El mayor de dos numeros |
| [ejercicio_05.js](ternario/ejercicio_05.js) | Precio con descuento VIP |
| [ejercicio_06.js](ternario/ejercicio_06.js) | Recomendacion por temperatura |
| [ejercicio_07.js](ternario/ejercicio_07.js) | Disponibilidad de stock |
| [ejercicio_08.js](ternario/ejercicio_08.js) | Control de velocidad |
| [ejercicio_09.js](ternario/ejercicio_09.js) | Saludo segun hora del dia |
| [ejercicio_10.js](ternario/ejercicio_10.js) | Tarifa de parqueadero |

### switch — [`switch/`](switch/)

| Archivo | Tema |
|---------|------|
| [ejercicio_01.js](switch/ejercicio_01.js) | Dia de la semana |
| [ejercicio_02.js](switch/ejercicio_02.js) | Dias del mes |
| [ejercicio_03.js](switch/ejercicio_03.js) | Calculadora basica |
| [ejercicio_04.js](switch/ejercicio_04.js) | Color por inicial |
| [ejercicio_05.js](switch/ejercicio_05.js) | Estacion del año |
| [ejercicio_06.js](switch/ejercicio_06.js) | Tipo de transporte |
| [ejercicio_07.js](switch/ejercicio_07.js) | Calificacion en letras |
| [ejercicio_08.js](switch/ejercicio_08.js) | Planetas del sistema solar |
| [ejercicio_09.js](switch/ejercicio_09.js) | Tipo de comida por numero |
| [ejercicio_10.js](switch/ejercicio_10.js) | Signo zodiacal |
#   a l g o r i t m o s - _ e l s e _ s w i t c h _ t e r n a r i o s  
 