"use strict";

/*23. Solicitar que el usuario ingrese un nombre y una contraseña, si el usuario
no ingresa alguno de los datos mostrar una alerta con el error, si la contraseña
es diferente de "123ABC" mostrar acceso denegado de otra manera mostrar un
mensaje de bienvenida saludando al usuario.*/

let datos1 = prompt("Ingrese un nombre");
if (datos1) {
  let datos2 = prompt("Ingrese una contraseña");
  if (datos2 === "123ABC") {
    document.write("Bienvenido " + datos1);
  } else {
    alert("Error, ingrese una contraseña correcta");
  }
} else {
  alert("Error, ingrese un nombre");
}
