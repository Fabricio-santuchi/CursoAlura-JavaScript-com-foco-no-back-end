const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map((nome) => {
    let primeiraLetra = nome.charAt(0).toUpperCase();
    let resto = nome.slice(1).toLowerCase();
    return primeiraLetra+resto;
});

console.log(nomes);
console.log(nomesAtualizados);