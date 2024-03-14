
const listaAluno = ['joao','juliana','caio','ana']; 
const medias = [10, 8, 7.5, 9];
const lista = [listaAluno,medias];
console.log(lista)

function verifiquePessoa(aluno){
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} está na lista e sua media é ${mediaAluno}`)
    }else{
        console.log('estudante não exite na lista!')
    }
}

verifiquePessoa('joao');
verifiquePessoa('joa');

/*
    includes();
    lista[0].includes(aluno) - serve para verificar se dentro da lista[0] tem o valor (aluno) se tiver ele volta TRUE se não ele volta FALSE.

    indexOf();
    const indice = lista[0].indexOf(aluno) - serve para dizer qual posição dentro do array o (aluno) está, se não tiver esse valor na lista ele vai retornar -1.

*/

