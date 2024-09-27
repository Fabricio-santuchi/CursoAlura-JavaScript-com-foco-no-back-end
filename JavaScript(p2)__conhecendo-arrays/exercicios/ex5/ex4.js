// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function par(array) {
  return array.filter((elemento) => elemento % 2 === 0);
}

console.log(par(arr));
