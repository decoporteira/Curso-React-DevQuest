const calcularValorPedido = require('./calcular-valor-pedido');

it('deve cobrar o frete', () => { 
    const novo_Pedido = {
        itens: [
            { nome: 'Poção de vida', valor: 100},
            { nome: 'Poção de mana', valor: 200},
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(novo_Pedido);
    // assertion
    expect(resultado).toBe(340);
});

it('não deve cobrar frete', () => { 
    const novo_Pedido = {
        itens: [
            { nome: 'Poção de vida', valor: 250},
            { nome: 'Poção de mana', valor: 250},
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(novo_Pedido);
    // assertion
    expect(resultado).toBe(500);
})

/* caso o estado seja RS ou SC cobrar 30% a mais de frete */
it('Cobra 30% a mais de frete', () => {
    const novo_Pedido = {
        estado: 'RS',
        itens: [
            { nome: 'Poção de vida', valor: 200},
            { nome: 'Poção de mana', valor: 200},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(novo_Pedido);
    expect(resultado).toBe(530);
})

/* caso o estado seja RS ou SC cobrar 30% a mais de frete */
it('Cobra 30% a mais de frete', () => {
    const novo_Pedido = {
        estado: 'SC',
        itens: [
            { nome: 'Poção de vida', valor: 100},
            { nome: 'Poção de mana', valor: 100},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(novo_Pedido);
    expect(resultado).toBe(330);
})

it('Não deve cobrar 30% a mais de frete', () => {
    const novo_Pedido = {
        estado: 'SP',
        itens: [
            { nome: 'Poção de vida', valor: 100},
            { nome: 'Poção de mana', valor: 100},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(novo_Pedido);
    expect(resultado).toBe(300);
})