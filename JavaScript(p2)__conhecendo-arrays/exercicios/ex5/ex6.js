// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function receba(array){
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

const arr = [1, 2, 51, 5, 357, 3, 34, 354, 236, 347, 896, 463, 835, 243, 642, 65, 7, 23, 9, 4];

console.log(receba(arr));