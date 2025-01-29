"use strict";

/* 24. Solicitar al usuario un código de acceso, si el código es:
- AAA: mostrar acceso a administrador
- BBB: mostrar acceso a profesor
- CCC: mostrar acceso a estudiante
- DDD: mostrar acceso a acudiente
De otro modo informar que no tiene un código válido.*/

const datos1 = prompt("Ingrese el codigo de acceso");
switch (datos1) {
  case "AAA":
    alert("Bienvenido Administrador");
    break;
  case "BBB":
    alert("Bienvenido Docente");
    break;
  case "CCC":
    alert("Bienvenido Estudiante");
    break;
  case "DDD":
    alert("Bienvenido Acudiente");
    break;
  default:
    alert("Su codigo no es valido");
    break;
}
