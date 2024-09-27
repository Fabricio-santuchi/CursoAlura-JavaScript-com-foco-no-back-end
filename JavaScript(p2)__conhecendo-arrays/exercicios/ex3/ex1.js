// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

//cria o array.
const array = [];

for (i = 1; i <= 5; i++) {
  array.push(i);
}

//exbi o array.
function imprimeElementos(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log();

  for (const valores of arr) {
    console.log(valores);
  }
}
imprimeElementos(array);
