const estudante = {
    nome: 'José silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['22999002122', '22999002123'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7));