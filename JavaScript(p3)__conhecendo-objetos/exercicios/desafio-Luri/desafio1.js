// Desafio: Crie um objeto em JavaScript que represente um carro, com propriedades como marca, modelo, ano e cor. Em seguida, crie uma função que receba esse objeto como parâmetro e imprima no console uma frase com as informações do carro, por exemplo: "O carro é um [marca] [modelo] de [ano] na cor [cor]". Se precisar de ajuda, estou aqui para te dar dicas!

const carro = {
    marca:'Tesla',
    modelo:'y',
    ano:2022,
    cor: 'branco',
};

function exibir(obj){
    const {marca, modelo, ano, cor} = obj;
    console.log(`O carro é um ${marca} do modelo ${modelo} de ${ano} na cor ${cor}`);
}

exibir(carro);