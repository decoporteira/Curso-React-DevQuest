let pessoas = [
    {nome: 'João', idade: 33},
    {nome: 'Maria', idade: 33},
    {nome: 'José', idade: 27}
]
// let pessoasComIdadeDe33 = []

// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 33) {
//         pessoasComIdadeDe33.push(pessoas[i])
//     }
// }

let pessoasComIdadeDe33 = pessoas.filter((pessoa) => {
    return pessoa.idade === 33
})

console.log(pessoasComIdadeDe33)