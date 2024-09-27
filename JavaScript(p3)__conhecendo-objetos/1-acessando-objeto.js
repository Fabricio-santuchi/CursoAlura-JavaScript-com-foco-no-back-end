const estudante = {
  nome: "José silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};
estudante.nome; // jose.

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(estudante["nome"]);
console.log(estudante["cpf"]);
console.log();
console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));
