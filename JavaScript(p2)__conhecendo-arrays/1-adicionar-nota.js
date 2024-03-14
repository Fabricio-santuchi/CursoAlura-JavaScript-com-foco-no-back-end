let notas = [10, 6, 8];
notas.push(7); // push(adiciona).
console.log(notas);

// Use o método reduce() para somar todos os valores do array
let soma = notas.reduce(function(valorTotal,valorAtual){
    return valorTotal + valorAtual;
}, 0);

let media = soma / notas.length;
console.log(media);
console.log(soma);

/*
 REDUCE()
 reduce cria uma function que adiciona dois parametros (acumulador, valorindex)
 acumulador começa com valor 0 como padrão mais vc pode atribuir ele no final da funcion dentro do reduce.
 dentro dessa function vai funcionar assim o valor acumulado pega o valorindex e soma com o proximo ate completar todos os valores da array.
 e no final esse valor e acrescentado a variavel do reduce.
*/
