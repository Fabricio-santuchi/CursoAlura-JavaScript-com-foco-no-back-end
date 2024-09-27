// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Astronomia: os astros, a ciência, a vida cotidiana",
  autor: "Marcelo Girardi Schappo",
  anoPublicacao: 2022,
  genero: "Astronomia",
  idadePublicacao: anoAtual - 2022,
};

console.log(`
\nDetalhes do Livro:
Título: ${livro["titulo"]}
Autor: ${livro["autor"]}
Ano de Publicação: ${livro["anoPublicacao"]}
Gênero: ${livro["genero"]}
Idade de Publicação: ${livro["idadePublicacao"]} anos\n
`);
