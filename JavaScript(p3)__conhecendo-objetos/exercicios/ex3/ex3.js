// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.

const carro = {
  marca: "BMW",
  modelo: "M3 Competition",
  ano: 2023,
  cor: "verde",
  ligado: true,

  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O carro está ligado.");
    } else {
      console.log("O carro já está ligado.");
    }
  },

  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log("O carro está desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  },

  obterDetalhes: function () {
    const estado = this.ligado ? "ligado" : "desligado";
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  },
};

carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();

console.log("\n", carro.obterDetalhes());
