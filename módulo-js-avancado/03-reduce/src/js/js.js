let ordens = [
    {cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX334'},
    {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Raphael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'},
]

// let quantidadeDeOrdens = 0
// for (let i = 0; i < ordens.length; i++) {
//     quantidadeDeOrdens += ordens[i].quantidade
// }

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => {
    return somaDasOrdens + ordem.quantidade
}, 0)
console.log(quantidadeDeOrdens)