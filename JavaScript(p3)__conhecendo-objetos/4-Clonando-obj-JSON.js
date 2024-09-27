// maneira errado que só faz uma referencia do primeiro obj:
const objetoOriginal = { chave: "valor" };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = "novoValor";
console.log(objetoOriginal.chave); // Saída: novoValor

// --------------------------------------------------------------
//Maneira certa de se copiar um OBJETO usando JSON.

const objetoOriginal1 = { chave: "valor" };
const copiaReferencia1 = JSON.parse(JSON.stringify(objetoOriginal1));

copiaReferencia1.chave = "valorNovo";

console.log(objetoOriginal1.chave); // valor
console.log(copiaReferencia1.chave); // valornovo.

/*
    Dessa maneira ele clona o objeto sem ser uma referencia do outro.
    Assim vc pode mudar os dados de um que o outro vai permanecer sem ser modificado.
*/
