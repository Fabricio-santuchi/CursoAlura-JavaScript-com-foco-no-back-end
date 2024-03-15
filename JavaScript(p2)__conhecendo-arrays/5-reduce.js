const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function somando(array){
    // const ttl = array.reduce((acumulador,valor) => {
    //      return acumulador + valor;
    // }, 0);
    
    const ttl = array.reduce((acumulador,valor) => acumulador + valor, 0);
    
    const media = ttl / array.length;
    return media;
}
console.log(somando(salaJS));
console.log(somando(salaJava));
console.log(somando(salaPython));