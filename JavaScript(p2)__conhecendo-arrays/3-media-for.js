const notas = [10,6.5,8,7.5];

let ttl = 0;
for(i=0 ; i<notas.length ; i++){
    ttl += notas[i];
}
const media = ttl/notas.length;
console.log(media);


// reduce
const ttls = notas.reduce((acumulador,valor) => {
    return acumulador += valor;
}, 0);

console.log(ttls/4);