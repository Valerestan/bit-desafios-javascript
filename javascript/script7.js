/*7. 
Crear una función para saludar, si la función recibe un nombre,
imprimir por consola: Hola, ____!
Si la función no recibe un nombre, imprimir: Hola, desconocido!*/

function saludar(saludo, nombre) {
  return saludo + "," + nombre + "!";
}
let info = saludar("Hola", "valentina");
let info1 = saludar("hola", "desconocido");
console.log(info);
console.log(info1);
