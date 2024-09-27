let matriz = [];
let valorInicial = 1;

for (i = 0; i < 3; i++) {
  let linha = [];
  for (j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log(matriz);
matriz.forEach((row) => console.log(row));

// Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

console.log(matriz[1][2]);
