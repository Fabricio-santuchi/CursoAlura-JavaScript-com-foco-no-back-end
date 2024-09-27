const estudantes = require("./estudantes.json");

function BuscaInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = BuscaInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEncontrado);

const telefoneEstudante = BuscaInformacao(estudantes, "telefone", "7919437785");
console.log(telefoneEstudante);
