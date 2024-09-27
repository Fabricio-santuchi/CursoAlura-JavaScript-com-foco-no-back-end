// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

const carro = {
  marca: "BMW",
  modelo: "M3 Competition",
  ano: 2023,
  cor: "verde",
};

console.log("\nPropriedades iniciais do carro:");
for (const chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}

carro.motor = "M TwimPower Turbo";
carro.cilindros = "6 em linha";
carro.valvulas = 24;
carro.cilindrada = "2.993 cm³";
carro.Portas = 4;
carro.combustivel = "Gasolina";

console.log("\nPropriedades atualizadas do carro:");
for (const chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}
console.log();
