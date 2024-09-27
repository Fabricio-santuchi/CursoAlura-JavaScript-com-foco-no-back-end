const listaEstudantes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
console.log(listaEstudantes);

listaEstudantes.splice(1, 2, "Rodrigo");
console.log(listaEstudantes);

/*
    splice();
    listaFake.splice(IndiceAondeComeça, QttQueVaiDeleta);
    uso normal.
    IndiceAondeComeça = o lugar onde vai começa exemplo vai começar no indice 1.
    QttQueVaiDeleta = Começou no indice 1 agora a quantidade a ser apagado vai ser 3 = vai ser apagado o indice 1, 2 e 3.

    listaFake.splice(IndiceAondeComeça, QttQueVaiDeleta, ElementoQueVaiSerAddNoLugar);
    IndiceAondeComeça = o lugar onde vai começa exemplo vai começar no indice 1.
    QttQueVaiDeleta = Começou no indice 1 agora a quantidade a ser apagado vai ser 3 = vai ser apagado o indice 1, 2 e 3.
    ElementoQueVaiSerAddNoLugar = depois de ter apagado esses valores adicione no lugar deles 'Joao', 'Paulo'.
*/
