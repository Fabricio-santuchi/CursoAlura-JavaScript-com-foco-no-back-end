// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for(i=0;i<numeros.length;i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}
console.log();

for (const valor of numeros) {
    if(valor % 2 === 0){
        console.log(valor);
    }
}
