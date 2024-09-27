// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Astronomia: os astros, a ciência, a vida cotidiana",
  autor: "Marcelo Girardi Schappo",
  anoPublicacao: 2022,
  genero: "Astronomia",
  idadePublicacao: anoAtual - 2022,
  avaliacao: null,
};

livro["genero"] = "Aventura";

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: ${
      livro.avaliacao === null
        ? "Nenhuma avaliação disponível."
        : `Nota: ${livro.avaliacao.nota}, Comentário: "${livro.avaliacao.comentario}"`
    }`);
