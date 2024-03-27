const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista,propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade); // hasOwnProperty verifica se a propriedade tem dentro dele mesmo.
    })
}

const listaEnderecosImcompletos = filtraPorPropriedade(estudantes,'cep');
console.log(listaEnderecosImcompletos);


/*
    ele verifica se a propriedade tem dentro da outra propriedade:
    objeto estudantes na parte endereco tem a propriedade cep?
    basicamente isso que acontece usand o hasOwnProperty().
*/