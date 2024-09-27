const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//     return nota + 1;
// });

const notasAtualizadas = notas.map((nota) => (nota + 1 >= 10 ? 10 : nota + 1));

console.log(notas);
console.log(notasAtualizadas);

/*
    map

    o map pode usar return o forEach não return.

    Se usa o MAP quando a gente precisa que o resultado do nosso procedimento seja guardado e retornado em uma nova array.
    Se usa o FOREACH Não retorna o procedimento nem nd, não tem como salvar o array antigo dentro de um novo.
*/
