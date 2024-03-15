// Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
const verificacaoAluno = todosAlunos.find(elemento => elemento === 'Pedro Almeida');

if(verificacaoAluno){
    console.log(`O aluno ${verificacaoAluno} está na lista.`);
}else{
    console.log(`Aluno não encontrado.`);
}