"use strict";
/*18. Solicitar primero el nombre, luego solicitar el apellido y por
último solicitar la edad al usuario, mostrar en la interfaz de usuario el mensaje:
Ej entrada: Pepita Pérez 16
Ej salida: Pérez Pepita tiene 16 años.*/

const datos = prompt("¿Cual es tu nombre?");
const datos2 = prompt("¿cual es tu apellido?");
const datos3 = prompt("¿cual es tu edad?");
document.write(datos + " " + datos2 + " tienes " + datos3 + " años.");
