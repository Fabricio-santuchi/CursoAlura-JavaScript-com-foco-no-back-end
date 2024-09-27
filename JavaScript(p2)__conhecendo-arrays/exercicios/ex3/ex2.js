// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const lista = [11, 22, 33, 44, 55, 66];

function receba(array) {
  for (i = 0; i < lista.length; i++) {
    console.log(`${i} = ${lista[i]}`);
  }
}

receba(lista);
