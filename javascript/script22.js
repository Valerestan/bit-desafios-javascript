"use strict";

/*22. Solicitar que el usuario ingrese un texto (cualquier) y mostrarle al usuario
el texto ingresado entre comillas sencillas.  Si el usuario no ingresa un texto
mostrarle una alerta indicando su error.*/

let datos1 = prompt("ingrese un texto");
document.write("'" + datos1 + "'");

if (datos1) {
  console.log();
} else {
  alert("Error no ingreso texto");
}
