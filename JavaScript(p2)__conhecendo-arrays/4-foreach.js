const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((numero) => {
  somaDasNotas += numero;
});

const media = somaDasNotas / notas.length;
console.log(somaDasNotas);
console.log(media);

/*
    Formas para usar o forEach.

    notas.forEach(function (nota) {
        somaDasNotas  += nota;
    });

    -------------------------------------------------

    lista.forEach(numero => soma += numero);

   -------------------------------------------------

    lista.forEach(numero => {
        soma += numero
    });
*/
