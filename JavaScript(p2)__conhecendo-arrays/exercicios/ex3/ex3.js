// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somar(array) {
  let somaDosValores = 0;
  for (const valor of array) {
    somaDosValores += valor;
  }
  return somaDosValores;
}
console.log(somar(int));
