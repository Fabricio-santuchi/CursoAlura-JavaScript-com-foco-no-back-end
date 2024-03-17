const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
// para clonar ele vou usar o Object.create

const objPersonagem2 = Object.create(objPersonagem);
console.log(objPersonagem2)

// resultado = {}

/*
    aqui foi criado um objeto identico o primeiro maisssssssss ele n recebeu nenhum valor: 
    Assim que esta agora o objPersonagem2
    const objPersonagem2 = {
        nome: 
        classe: 
        nivel: 
    }

    ta tudo sem nada atribuido, então usando o Object.create vai cria um objeto identico mais sem os valores.
*/