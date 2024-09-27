const listaEstudantes = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
console.log(listaEstudantes);

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
console.log(sala1);

const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);
console.log(sala2);

/*
    slice();
    slice(indiceQueComeça,indiceQueTermina);
    o indice que termina é opcional.
    exemplo se eu não adicionar ele vai ate o ultimo elemento que no caso é 19.
    listaFiquiTicia.slice(9) = começa no 9 e termina na ultima.
    listaFiquiTicia.slice(0, listaFiquiTicia.length / 2) = começa no 0 e termina na metade da array.
    listaFiquiTicia.slice(0, 4) = começa no indice 0 e termina no 4.
*/
