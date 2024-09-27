// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Astronomia: os astros, a ciência, a vida cotidiana",
  autor: "Marcelo Girardi Schappo",
  anoPublicacao: 2022,
  genero: "Astronomia",
  idadePublicacao: anoAtual - 2022,
  avaliacao: {
    nota: 4.5,
    comentario: "Ótima leitura!",
  },
};

delete livro["avaliacao"];

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`);
