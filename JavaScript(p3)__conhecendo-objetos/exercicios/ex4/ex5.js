function Copia(obj){
    return JSON.parse(JSON.stringify(pessoaOriginal));
}

const pessoaOriginal = {
    id: 1,
    nome: "Luna",
    idade: 15
};

const pessoaOriginalCopia = Copia(pessoaOriginal);

pessoaOriginalCopia.nome = 'Billy';
pessoaOriginalCopia.idade = 25;

console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaOriginalCopia);