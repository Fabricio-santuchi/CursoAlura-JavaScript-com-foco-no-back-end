const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (const nota of notas) {
  console.log((somaDasNotas += nota));
}

/*
    forof
    const iterator of object
    const iterator = nome aonde os valores do array vai passar.
    of object = nome do array que vai usar.

    ele é focado em array.

    for (variável of iterável) {
    -- Código a ser executado em cada iteração
    }
    "variável": Refere-se a uma variável que receberá o valor de cada elemento do iterável a cada iteração do laço.
    "iterável": É o objeto que será percorrido, como um array, string, set, map, etc.

    Este laço percorrerá cada elemento do array "array" e, em cada iteração, a variável "elemento" receberá o valor do elemento correspondente. Neste caso, ele imprimirá no console os números de 1 a 5.
    O laço "for...of" é útil quando se deseja percorrer os elementos de um objeto iterável sem se preocupar com o índice ou o comprimento do objeto, tornando-o mais simples e legível em comparação com outros tipos de laços, como o laço "for" tradicional.
*/

const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.9;

for (let preco of precos) {
  preco = preco * desconto;
}

console.log(precos);
