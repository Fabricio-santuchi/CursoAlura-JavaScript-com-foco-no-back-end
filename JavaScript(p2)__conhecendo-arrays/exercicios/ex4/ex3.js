// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = 123;

let indice = listaNum.indexOf(num);

if (listaNum.includes(num)) {
  console.log("O num está na lista!");
  console.log(`A posição do indice é ${indice}`);
} else {
  console.log("O num não faz parte da lista!");
  console.log(`${indice}`);
}

// const numeros = [10, 20, 30, 40, 50];
// const numeroProcurado = 30;
// let posicao = -1;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] === numeroProcurado) {
//     posicao = i;
//     break;
//   }
// }

// console.log(`Posição do número ${numeroProcurado}: ${posicao}`);
