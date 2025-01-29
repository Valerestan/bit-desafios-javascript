"use strict";

/*25. Solicitar al usuario un número entero positivo,
mostrar al usuario los números desde cero hasta el número ingresado.*/


const datos1 = parseInt(prompt("Ingrese un numero entero positivo:"));
for (let i = 0; i <= datos1; i++) {
  document.write(i + "<br>");
}
