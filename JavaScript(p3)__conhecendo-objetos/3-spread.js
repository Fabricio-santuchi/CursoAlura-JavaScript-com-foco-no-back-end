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
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71b',
        complemento: null,
    }]
}

function  exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones); //operador de espalhamento.

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0] //operador de espalhamento.
}

console.log(dadosEnvio)