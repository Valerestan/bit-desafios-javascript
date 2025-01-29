"use strict";
/* 29.Crear una constante y asignarle un número entre 1 y 9. Solicitar al 
usuario que adivine el número, permitir máximo 3 intentos.*/

const numerocorrecto = 5;
let intentos = 0;
const adivinarnumero = parseInt(
  prompt("Adivina un numero del 1 al 9, tienes 3 intentos:")
);
do {
  if (adivinarnumero === numerocorrecto) {
    alert("¡Felicidades! Adivinaste el número.");
    return;
  } else if (adivinarnumero < numerocorrecto) {
    alert("El número es mayor. Intenta de nuevo.");
  } else if (adivinarnumero > numerocorrecto) {
    alert("El número es menor. Intenta de nuevo.");
  }
  intentos++;
} while (intentos <= 3);
