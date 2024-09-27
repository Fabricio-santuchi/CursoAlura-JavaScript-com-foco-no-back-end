const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

/*
    set()

    Ele parece um array mais não é 
    set é um conjunto então na hora que usamos ele, ele só pega os valores unicos os repetidos ele deleta deixando um unico
    isso e bom para poder ajeita um array com varias nomes ou numeros repetidos.

    const listaNomesAtualizados = [...new Set(nomes)]; - aqui estou pegando array nomes enviando ele para set que vai filtra os valores que não são repetidos e vai em seguida espalhar dentro de uma novo array usando ...
*/
