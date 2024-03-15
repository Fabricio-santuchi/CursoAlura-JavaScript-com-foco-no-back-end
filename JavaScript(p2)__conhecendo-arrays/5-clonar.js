const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas , 10];

// spread operator
console.log(notas);
console.log(novaListaNotas);

/*
    usando o ... eu estou pegando os valores do array notas desestruturando eles e jogando os mesmos valores dentro dessa nova array resumindo um array novo clonado.

    se eu so atribuir notas dentro de novaListaNotas, eu vou estar dando uma referencia a novaListaNotas entao se eu mudar novaListaNotas vai mudar notas tambem. Como se elas tivesem interligadas por isso temos que usar o ...

    ele vai pegar os valores (espalha eles dentro do novo array).
*/