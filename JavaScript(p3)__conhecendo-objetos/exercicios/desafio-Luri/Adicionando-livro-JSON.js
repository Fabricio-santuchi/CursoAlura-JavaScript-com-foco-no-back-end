const novoLivro = {
  titulo: "Node.js: Guia Prático",
  autor: "Alice Coder",
  genero: "Tecnologia",
  ano_publicacao: 2022,
};

const biblioteca = require("./biblioteca.json"); // importe biblioteca from './biblioteca.json';

biblioteca.push(novoLivro);

console.log(biblioteca);

const bibliotecaString = JSON.stringify(biblioteca);

console.log(bibliotecaString);
