// import estudante from './4-estudante.json';
const estudante = require('./4-estudante.json');

// console.log(estudante);
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
const valores = Object.values(estudante) 
const chavesEvalores = Object.entries(estudante)

console.log(chaves);
console.log(valores);
console.log(chavesEvalores);