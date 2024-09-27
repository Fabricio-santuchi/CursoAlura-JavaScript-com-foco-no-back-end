const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);

console.log(
  `A aluna da posição 1 da lista é: ${lista[0][1]}.
    a nota dela é ${lista[1][1]}`
);

/*
    matrizes = uma array com varias dentro dela mesma.
    exemplo tem 2 arrays dentro da array = lista.
    para acessar a primeira array seria o indice[0] e o terceiro item dentro dessa primeira array seria [2] =  lista[0][2]
*/
