"use strict";
/* 29.Crear una constante y asignarle un número entre 1 y 9. Solicitar al 
usuario que adivine el número, permitir máximo 3 intentos.*/

const datos = parseInt(
  prompt("Adivine un numero entre 1 y 9, tienes 3 intentos:")
);
const numero1 = 4;
let intentos = 0;

do {
  if (datos === numero1) {
    alert("lo lograste");
    break;
  } else {
    alert("te quedan 2 intentos");
    intentos++;

    if (datos === numero1) {
      alert("lo lograste");
      break;
    } else {
      alert("te quedan 1 intentos");
    }
  }
} while ((intentos = 3));

const companeroshombres = [
  "Brayan Narvaez",
  "Daniel Cruz",
  "Juan Aguirre",
  "Nicolas",
  "Sergio Novoa",
];
const companerosmujeres = [
  "Valentina Restan",
  "Alexandra Restrepo",
  "Manuela Alvarez",
];
