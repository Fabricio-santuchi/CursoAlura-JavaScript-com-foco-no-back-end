const listaAluno = ["joao", "juliana", "caio", "ana"];
const medias = [10, 8, 7.5, 9];
const lista = [listaAluno, medias];

function verifiquePessoa(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista;
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`${aluno} está na lista e sua media é ${mediaAluno}`);
  } else {
    console.log("estudante não exite na lista!");
  }
}

verifiquePessoa("joao");
verifiquePessoa("joa");

/*
    desestruturação.
    tenho uma array chamada LISTA e dentro dela tem 2 ARRAYS: const lista = [alunos, medias];
    usando a desestruturação eu consigo transforma essa lista em 2 arrays novamente: const [alunos, medias] = lista;
    exemplos onde isso me ajuda:
                                                                  [0]      [1]
                                                          const [alunos, medias] = lista;
        const indice = lista[0].indexOf(aluno);   ----    const indice = alunos.indexOf(aluno);
        const mediaAluno = lista[1][indice];      ----    const mediaAluno = medias[indice];

    de um lado a versão antiga do outro usando a desestruturação.
    antes eu usava lista[0] agora uso alunos.
    antes eu usava lista[1] agora uso medias.

*/
