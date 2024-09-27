//  Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const array = [
  1, 2, 51, 5, 357, 3, 34, 354, 236, 347, 896, 463, 835, 243, 642, 65, 7, 23, 9,
  4,
];

const filtro = array.filter((elemento) => elemento % 3 === 0 && elemento > 5);

console.log(filtro);
