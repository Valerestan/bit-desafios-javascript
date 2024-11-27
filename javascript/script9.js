/* 9. 
- Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda. 
- Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.
Ej entrada: suma, 8, 4
Ej salida: 8 + 4 = 12*/

// 9.1

function sumar(a, b) {
  return a + b;
}
resultado = sumar(8, 2);
console.log(resultado);

function restar(a, b) {
  return a - b;
}
resultado = restar(8, 2);
console.log(resultado);

function multiplicar(a, b) {
  return a * b;
}
resultado = multiplicar(8, 2);
console.log(resultado);

function dividir(a, b) {
  return a / b;
}
resultado = dividir(8, 2);
console.log(resultado);

function modulo(a, b) {
  return a % b;
}
resultado = modulo(8, 2);
console.log(resultado);

function potencia(a, b) {
  return a ** b;
}
resultado = potencia(8, 2);
console.log(resultado);

//9.2

function operacion1(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
operacion1(8, 4);

function operacion2(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}
operacion2(8, 4);

function operacion3(a, b) {
  console.log(`${a} x ${b} = ${a * b}`);
}
operacion3(8, 4);

function operacion4(a, b) {
  console.log(`${a} / ${b} = ${a / b}`);
}
operacion4(8, 4);

function operacion5(a, b) {
  console.log(`${a} % ${b} = ${a % b}`);
}
operacion5(8, 4);

function operacion6(a, b) {
  console.log(`${a} ^ ${b} = ${a ** b}`);
}
operacion6(8, 4);
