// Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

function juntaArray(...arrays){
     return [].concat(...arrays);
}

const arr = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = [11,12,13,14,15];
let array = juntaArray(arr,arr2,arr3);

console.log(array);