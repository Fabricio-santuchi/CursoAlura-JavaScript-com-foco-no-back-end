/* 2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do filme.
titulo (string): título do filme.
diretor (string): nome do diretor.
anoLancamento (number): ano de lançamento do filme.

Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano. */

const catalogoFilmes = [
    {
        id: 1, 
        titulo: "Deadpool", 
        diretor: "Tim Miller", 
        anoLancamento: 2016
    },
    {
        id: 2, 
        titulo: "Deuses do Egito", 
        diretor: "Alex Proyas", 
        anoLancamento: 2016
    },
    { 
        id: 3, 
        titulo: "Inception", 
        diretor: "Christopher Nolan", 
        anoLancamento: 2010 
    },
    {   
        id: 4, 
        titulo: "As Tartarugas Ninja: Fora das Sombras", 
        diretor: "David Green", 
        anoLancamento: 2016
    },
    { 
        id: 5, 
        titulo: "Matrix", 
        diretor: "Lana Wachowski", 
        anoLancamento: 1999 
    },
    {
        id: 6, 
        titulo: "Meu Amigo, o Dragão", 
        diretor: "David Lowery", 
        anoLancamento: 2016
    },
    { 
        id: 7, 
        titulo: "Jurassic Park", 
        diretor: "Steven Spielberg", 
        anoLancamento: 1993 
    },
    {
        id: 8, 
        titulo: "Monster Trucks", 
        diretor: "Chris Wedge", 
        anoLancamento: 2016
    }
];

function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter((filme) => filme.anoLancamento === ano);
}
console.log('\nFilmes lancados no ano 2016:')
console.log(filtrarFilmesPorAno(2016));
console.log('\nFilmes lancados no ano 1993:')
console.log(filtrarFilmesPorAno(1993));

