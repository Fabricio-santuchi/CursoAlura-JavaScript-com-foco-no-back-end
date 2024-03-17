//  Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

const calculadora = {
    soma: function(n1,n2){
        return n1 + n2;
    },
    subtracao: function(n1,n2){
        return n1 - n2;
    },
    multiplicacao: function(n1,n2) {
        return n1 * n2;
    },
    divisao: function(n1,n2){
        if(n2 !== 0){
            return (n1 / n2).toFixed(2);
        }else{
            return 'Não é possível dividir por zero!';
        }
    },
    calcularMedia: function(array){
        const somaTotal = array.reduce((acumulador, valor) => acumulador + valor, 0);
        return (somaTotal / array.length).toFixed(2);
    },
};

console.log(`A soma: ${calculadora.soma(4,5)} 
Subtração: ${calculadora.subtracao(4,5)}
Multiplicação: ${calculadora.divisao(4,5)}
Divisão: ${calculadora.multiplicacao(4,5)}`);

const numerosArray = [10, 8, 6, 9, 7];

console.log(`A media : ${calculadora.calcularMedia(numerosArray)}`);