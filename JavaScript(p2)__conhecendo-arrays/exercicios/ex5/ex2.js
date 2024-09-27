// Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = valores.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(soma);
