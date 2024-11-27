/*12. 
  Crear una función que reciba 1 número, imprimir si es negativo o si es positivo. */

  function numero(a) {
    if(a <= 0) {
        console.log(`tu numero es negativo ${a}`);
    } else {
        console.log(`tu numero es positivo ${a}`);
    }
  }
numero(8);
numero(-9);
numero(0);
