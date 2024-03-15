const alunos = ['Ana','Marcos','Maria','Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno) => {
   return aluno.length < 7;

});

console.log(reprovados)

/*
    filter()

    ele é parecido com find()
    ele pega o (parametro) que é 'valor' e o 'indice', e depois
    faz a condição e todos os valores que estiver nessa condição vão ser mostrados no console.
    ele devolve um array com os valores.
    se não tiver nenhum que afirma a condição ele devolve um array vazio.

    já no find ele devolve só 1 valor.
*/