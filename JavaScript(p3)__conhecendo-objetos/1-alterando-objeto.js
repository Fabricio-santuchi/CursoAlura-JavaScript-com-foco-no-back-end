const estudante = {
  nome: "José silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};

estudante.telefone = "(22)99900-2314"; // adiciona/altera a propriedade já existente
console.log(estudante);

estudante.nome = "José Souza"; // adiciona/altera a propriedade já existente.
console.log(estudante);

/*
    Adicionando um nova propriedade ao objeto: estudante.telefone = '(22)99900-2314';
    é só colocar 'nomeDoObjeto.nomeDaPropriedade = Evalor'
    assim voce adiciona uma propriedade ao objeto.

    Alterando o valor da propriedade já existente:
    colocar o nome do objeto depois ponto e nome da propriedade e atribua o novo valor.
    estudante.telefone = '(00)00000-0000';

    Mesmo o objeto declarado como const pode ser modificado.
*/
