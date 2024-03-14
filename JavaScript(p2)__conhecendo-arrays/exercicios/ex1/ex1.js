// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const array = [];
array[1] = 4;
array[3] = 6;
array[7] = 8;

console.log(array);
console.log(`Comprimento do array é ${array.length}`);