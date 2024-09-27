// Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

const pessoa = {
  nome: "Fabricio",
  idade: 24,
  solteiro: false,
  hobbies: ["Jogar", "Estudar", "Aprender novas tecnologias"],
  endereco: {
    rua: "Dilce artiles martins",
    cidade: "Campos dos goytacazes",
    estado: "Rio de janeiro",
  },
};

function mostrarInfoPessoa(objeto) {
  console.log(`
        Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome}).
        idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade}).
        solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro}).
        hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies}).
        endereco: 
            rua: ${pessoa.endereco.rua}.
            cidade: ${pessoa.endereco.cidade}.
            estado: ${pessoa.endereco.estado}.
    `);
}

mostrarInfoPessoa(pessoa);
