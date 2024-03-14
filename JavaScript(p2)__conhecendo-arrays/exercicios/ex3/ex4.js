// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const array = [10, 5, 7, -5, 20, 15];

const maiorNumero = Math.max(...array);
const menorNumero = Math.min(...array);

console.log(maiorNumero);
console.log(menorNumero);


/*
    fiz da maneira mais nova! ES6.
    o Math.max e Math.min funciona dessa maneira.
    Math.max(...array) - ...array ele tira os valores de dentro do array e coloca dentro max como se fosse assim: Math.max(10, 5, 7, 20, 15); e assim ele faz a verificação qual é o maior.
    Math.min(...array) - ele é da mesma maneira coloca os valores pra fora e faz o teste. Math.min(10, 5, 7, 20, 15);
    se vc colocar (array) sem os (...) ele não funciona e vai da NaN.
*/