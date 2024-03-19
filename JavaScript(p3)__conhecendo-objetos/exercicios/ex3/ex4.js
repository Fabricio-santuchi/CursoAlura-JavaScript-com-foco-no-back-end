// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

const carro = {
    marca: 'BMW',
    modelo: 'M3 Competition',
    ano: 2023,
    cor: 'verde',
    placa: "ABC1234"
}

Object.defineProperty(carro, 'placa', { enumerable: false});

console.log("Propriedades Enumeráveis do Carro:");
for (let chave in carro) {
    console.log(chave, carro[chave]);
}

const chavesEnumeradas = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeradas);

console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa)