"use strict";
/* 27. Solicitar al usuario un número entero positivo, mostrar al usuario 
los números desde 1 hasta el número ingresado menos 1 cada número debe 
estar separado por una coma y un espacio, el número final debe terminar 
con punto. Ej entrada: 5 Ej salida: 1, 2, 3, 4. */

const datos1 = parseInt(prompt("Ingrese un numero entero positivo:"));
for (let i = 1; i < datos1; i++) {
  if (i === numero - 1) {
    document.write(i + ".");
  } else {
    document.write(i + ", ");
  }
}