// Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.

// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
    titulo: 'Astronomia: os astros, a ciência, a vida cotidiana',
    autor: 'Marcelo Girardi Schappo',
    anoPublicacao: 2022,
    genero: 'Astronomia'
};
console.log(`\nDetalhes do Livro:
Título: ${livro['titulo']}
Autor: ${livro['autor']}
Ano de Publicação: ${livro['anoPublicacao']}
Gênero: ${livro['genero']}\n`
);
