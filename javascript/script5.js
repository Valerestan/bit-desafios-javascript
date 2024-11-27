/*5. 
Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/

function desfio5(nombre, apellido) {
  return apellido + " " + nombre;
}

let nombrecompleto = desfio5("valentina", "restan");
let nombrecompanero = desfio5("posada", "builes");
console.log(nombrecompleto);
console.log(nombrecompanero);
