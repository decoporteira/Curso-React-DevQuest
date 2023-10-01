const pessoas = ['João', 'Maria', 'José'];
//console.log(...pessoas);

let pessoas1 = ['João', 'Maria', 'José'];
let pessoas2 = ['Marcos', 'Paulo', 'Pedro'];

let pessoas3 = pessoas1.concat(pessoas2);

pessoas1 = [...pessoas1, ...pessoas2]
console.log(pessoas1);

// clonar objetos 

const pessoa1 = { nome: 'Deco', idade: 30 };
const objetoClone = { ...pessoa1 };
console.log(objetoClone);