let pessoa = { nome: "Deco", sobrenome: "Barbosa", idade: 30 };
// let nome = pessoa.nome;
// let idade = pessoa.idade;

// console.log(nome);
// console.log(idade);

let { nome: nome, idade: idade} = pessoa;


console.log(nome);
console.log(idade);

const numeros = [1, 2, 3];

const [primeiroNumero, segundoNumero, terceiroNumero] = numeros;

console.log(primeiroNumero);