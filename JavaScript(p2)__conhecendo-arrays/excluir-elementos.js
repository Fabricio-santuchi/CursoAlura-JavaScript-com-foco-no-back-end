const notas = [10, 6, 8, 5.5, 10];
console.log(notas);
notas.pop();
console.log(notas);

const valorTotal = notas.reduce((acumulador,valor) => {
    return acumulador + valor;
},0);

const media = valorTotal / notas.length;
console.log(valorTotal);
console.log(media.toFixed(2));