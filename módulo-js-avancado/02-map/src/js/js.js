let pessoas = [
    {nome: 'João', idade: 33},
    {nome: 'Maria', idade: 33},
    {nome: 'José', idade: 27}
]

// let nomeDasPessoas = []
// for (let i =  o; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }

let nomeDasPessoas = pessoas.map((pessoa) => {     
    return pessoa.nome
})

console.log(nomeDasPessoas)