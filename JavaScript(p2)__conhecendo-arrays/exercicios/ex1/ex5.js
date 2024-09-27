// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];
clinica.push("Pastor-alemão", "Golden retriever", "Shih-tzu");
console.log(clinica);

for (i = 0; i <= clinica.length + 1; i++) {
  clinica.pop();
}
console.log(clinica);
