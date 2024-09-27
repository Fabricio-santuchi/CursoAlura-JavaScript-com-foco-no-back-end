const array = [];
function gerarNumeroAleatorio(min, max) {
  let num;
  for (i = 1; i <= 10; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
gerarNumeroAleatorio(4, 10);
console.log(array);

let somaDosValores = 0;
for (const valor of array) {
  somaDosValores += valor;
}

const media = somaDosValores / array.length;
console.log(somaDosValores);
console.log(media);
