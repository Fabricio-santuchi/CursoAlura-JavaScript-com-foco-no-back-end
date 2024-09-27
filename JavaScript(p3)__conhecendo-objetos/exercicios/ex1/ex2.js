// Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

//----------------------------------------------------
const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Astronomia: os astros, a ciência, a vida cotidiana",
  autor: "Marcelo Girardi Schappo",
  anoPublicacao: 2022,
  genero: "Astronomia",
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.mostraDetalhes = `
\nDetalhes do Livro:
Título: ${livro["titulo"]}
Autor: ${livro["autor"]}
Ano de Publicação: ${livro["anoPublicacao"]}
Gênero: ${livro["genero"]}
Idade de Publicação: ${livro["idadePublicacao"]} anos\n
`;

console.log(livro.mostraDetalhes);
