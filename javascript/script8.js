/*8.
 Crear cinco funciones, (sumar, restar, multiplicar, dividir, módulo), debe
recibir 2 números e imprimir el resultado así:
Ej entrada: 8, 4
Ej salida: 8 + 4 = 12*/

function sumar(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2} `);
}
sumar(8, 4);

function restar(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2} `);
}
restar(8, 4);

function multiplicar(num1, num2) {
  console.log(`${num1} x ${num2} = ${num1 * num2} `);
}
multiplicar(8, 4);

function dividir(num1, num2) {
  console.log(`${num1} / ${num2} = ${num1 / num2} `);
}
dividir(8, 4);

function modulo(num1, num2) {
  console.log(`${num1} % ${num2} = ${num1 % num2} `);
}
modulo(8, 4);
