"use strict";
/*28. Solicitar al usuario un número entero positivo, mostrar al usuario
 las tablas de multiplicar desde cero hasta el número ingresado. 
 Ej entrada: 1 Ej salida: 0 x 0 = 0 0 x 1 = 0 1 x 0 = 0 1 x 1 = 1*/

 let datos1 = parseInt(prompt("Ingrese un numero entero positivo:"));
for (let i = 0; i <= datos1; i++) {
  document.write(i + "x" + datos1 + "=" + i * datos1 + "<br>");
}