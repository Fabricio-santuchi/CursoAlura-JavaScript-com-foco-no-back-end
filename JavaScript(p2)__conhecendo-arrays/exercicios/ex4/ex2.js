// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const numeros = [1,2,4,6];

function executaOperacaoEmArray(array,funcaoCallBack){
    return array.map(funcaoCallBack);
}

function multNumero(num){
    return num * 2;
}

const listaNumeroMult = executaOperacaoEmArray(numeros, multNumero);
console.log(listaNumeroMult)