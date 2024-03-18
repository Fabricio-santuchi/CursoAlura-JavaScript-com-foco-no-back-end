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
        complemento: '',
    }]
}

for (const chave in estudante) {
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}

/*
    const variavel in objeto
    variavel pode colocar qualquer nome mais como padrao vem 'chave'.
    objeto como o nome já diz e o nome do objeto que vamos usar.

    chave retorna: toda as propriedades: console.log(chave)
        nome
        idade
        turma
        bolsista
        telefones
        enderecos

    para retorna os valores: console.log(estudante[chave])
        José silva
        32
        12312312312
        JavaScript
        true
        [ '22999002122', '22999002123' ]
        [
            { rua: 'Rua joseph Climber', numero: '45a', complemento: 'apto 201' },
            { rua: 'Rua Dona Clotilde', numero: '71b', complemento: '' }
        ]
    
    usando os dois junto: console.log(chave, estudante[chave])
        nome José silva
        idade 32
        cpf 12312312312
        turma JavaScript
        bolsista true
        telefones [ '22999002122', '22999002123' ]
        enderecos [
                    { rua: 'Rua joseph Climber', numero: '45a', complemento: 'apto 201' },
                    { rua: 'Rua Dona Clotilde', numero: '71b', complemento: '' }
                  ]
*/