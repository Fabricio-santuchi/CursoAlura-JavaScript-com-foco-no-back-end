/*
4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do animal.
nome (string): nome do animal.
especie (string): espécie do animal.
idade (number): idade do animal.

Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.
Exemplo

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

Você pode criar funções para fazer a ordenação crescente ou decrescente:

function compararIdadeCrescente(a, b) {
    // implementação
}

function compararIdadeDecrescente(a, b) {
    // implementação
}
*/

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade 
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade
}

const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosCrescente);

const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log("\nAnimais Ordenados por Idade (Decrescente):");
console.log(animaisOrdenadosDecrescente);