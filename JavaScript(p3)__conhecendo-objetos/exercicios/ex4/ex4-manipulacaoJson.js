const animais = require("./animais.json");

const animaisObjeto = JSON.parse(JSON.stringify(animais));

const novoAnimal = {
  id: 4,
  nome: "Hipopótamo",
  tipo: "Mamífero",
  habitat: "Lagos",
};
animaisObjeto.animais.push(novoAnimal);

const animalParaModificar = animaisObjeto.animais.find(
  (animal) => animal === 3
);
if (animalParaModificar) {
  animalParaModificar.habitat = "Rua";
}

const indiceAnimalRemover = animaisObjeto.animais.findIndex(
  (animal) => animal.id === 2
);
if (indiceAnimalRemover !== -1) {
  animaisObjeto.animais.splice(indiceAnimalRemover, 1);
}

const objetoString = JSON.stringify(animaisObjeto);

console.log("Objeto JavaScript Resultante das Operações:");
console.log(animaisObjeto);
