/*14. Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.*/

function multiple(a) {
    if(a < 0) {
    console.log(`tu numero ${a} es negativo`);
    } if(a > 0) {
    console.log(`tu numero ${a} es positivo`);
    } if(a === 0) {
    console.log(`tu numero ${a} es igual a 0`);
    }
    
}
multiple(-8);
multiple(8);
multiple(0);

