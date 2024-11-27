/*6. 
Crear una función que reciba cuatro párametros, un nombre, una prenda, un
color y una cantidad y retorne: ____ tiene __ ____ de color ____.
Ej entrada: pepita, camisas, azul, 2
Ej salida: Pepita tiene 2 camisas de color azul.*/

function intento(nombre, prenda, color, cantidad) {
  return nombre + " tiene " + cantidad + " " + prenda + " de color " + color;
}
let ejercicio1 = intento("pepita", "camisas", "azul", "2");
let ejercicio2 = intento("juan", "pantalones", "amarillo", "10");
console.log(ejercicio1);
console.log(ejercicio2);
