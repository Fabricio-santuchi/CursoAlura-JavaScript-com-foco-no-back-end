// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ['Espaguete ao frutos do mar','Paella','Lagosta ao thermidor'];
const menuDeSobremesas = ['Frozen Yogurt','Suflê de Banana e Canela','Mousse de Chocolate Light'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);