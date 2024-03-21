//Desafio: Crie uma função em JavaScript que receba como parâmetro um array de objetos representando produtos, onde cada objeto contém as propriedades "nome" e "preco". A função deve calcular e retornar o preço total dos produtos. Em seguida, crie um array de objetos e teste a função que você criou. Se precisar de dicas ou ajuda, estou aqui para te orientar!

const arrayDeProdutos = [{
    nome: 'Arroz Tio João - 5kg',
    preco: 39.99,
},
{
    nome: 'Feijão Carioca - 1k',
    preco: 8.99,
},
{
    nome: 'Óleo De Soja Soya 900 ml',
    preco: 5.01,
},
{
    nome: 'Picanha Resfriada Montana Steakhouse 1kg',
    preco: 114.17,
},
{
    nome: 'Açúcar Cristal 5 Kg União',
    preco: 23.89,
}];

function produtos(array_obj){
    let valorTotal = 0;
    array_obj.forEach(element => {
        valorTotal += element.preco;
    });
    console.log(`O valor total dos produtos é ${valorTotal}.`);
}
produtos(arrayDeProdutos);