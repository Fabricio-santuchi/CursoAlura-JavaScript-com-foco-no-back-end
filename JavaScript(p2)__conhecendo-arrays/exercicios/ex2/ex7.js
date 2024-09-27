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

// Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
console.log();

matriz[2][1] = 15;
matriz.forEach((row) => console.log(row));
