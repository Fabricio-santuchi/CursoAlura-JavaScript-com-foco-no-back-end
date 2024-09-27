// Considere um array de números inteiros.

const numeros = [6, 9, 12, 15, 18, 21];
console.log(numeros);

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.

numeros.forEach((valor) => {
  let mul = valor * 3;
  console.log(`O valor ${valor} multiplicado por 3 é igual: ${mul}`);
});

//find
const numeroProcurado = 128;
const encontrarNumero = numeros.find(
  (elemento) => elemento === numeroProcurado
);
if (encontrarNumero) {
  console.log(`O número ${encontrarNumero} está presente na lista!`);
} else {
  console.log(`O número não está na lista!`);
}

//findIndex
const encontrarIndice = numeros.findIndex(
  (elemento) => elemento === numeroProcurado
);
if (encontrarIndice !== -1) {
  console.log(`O Indice desse número é ${encontrarIndice}!`);
} else {
  console.log(
    `O Indice desse número é ${encontrarIndice}! Atenção se o valor for -1 ELE NÃO ESTÁ NA LISTA!`
  );
}
