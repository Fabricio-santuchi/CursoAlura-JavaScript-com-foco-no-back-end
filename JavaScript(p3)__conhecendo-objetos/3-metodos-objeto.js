const estudante = {
    nome: 'José silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['22999002122', '22999002123'],
    // enderecos: [{
    //     rua: 'Rua joseph Climber',
    //     numero: '45a',
    //     complemento: 'apto 201',
    // },
    // {
    //     rua: 'Rua Dona Clotilde',
    //     numero: '71b',
    //     complemento: '',
    // }]
}

const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos);

if(!chavesObjetos.includes('enderecos')){
    console.error('é necessário ter um endereço cadastrado');
}
const chavesObjetos2 = Object.values(estudante)
console.log(chavesObjetos2);

console.log(Object.entries(estudante))