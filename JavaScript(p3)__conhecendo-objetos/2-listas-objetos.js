const estudante = {
    nome: 'José silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['22999002122', '22999002123'],
    enderecos: [{
        rua: 'Rua joseph Climber',
        numero: '45a',
        complemento: 'apto 201',
    }]
}

estudante['enderecos'].push({
    rua: 'Rua Dona Clotilde',
    numero: '71b',
    complemento: '',
});

console.log(estudante.enderecos);
console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante['enderecos'].filter((endereco) => endereco.complemento); // filter: ele filtra oque a operação pede e retorna todos os que se enquadra a operação!

console.log(listaEnderecosComComplemento)