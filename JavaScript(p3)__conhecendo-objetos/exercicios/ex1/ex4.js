// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Astronomia: os astros, a ciência, a vida cotidiana",
  autor: "Marcelo Girardi Schappo",
  anoPublicacao: 2022,
  genero: "Astronomia",
  idadePublicacao: anoAtual - 2022,
  avaliacao: null,
};
const novaAvalicao = { nota: 9.5, comentario: "Ótima leitura!" };

if (livro["avaliacao"] === null) {
  livro.avaliacao = novaAvalicao;
} else {
  console.log(`livro já possui uma avaliação.`);
}

console.log("Detalhes do Livro:");
console.log("Título: " + livro["titulo"]);
console.log("Autor: " + livro["autor"]);
console.log("Ano de Publicação: " + livro["anoPublicacao"]);
console.log("Gênero: " + livro["genero"]);
console.log("Idade de Publicação: " + livro["idadePublicacao"] + " anos");
console.log(
  "Avaliação: " +
    (livro["avaliacao"] === null
      ? "Nenhuma avaliação disponível."
      : "Nota: " +
        livro["avaliacao"]["nota"] +
        ', Comentário: "' +
        livro["avaliacao"]["comentario"] +
        '"')
);
