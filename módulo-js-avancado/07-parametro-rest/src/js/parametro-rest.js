// function(a, b, ...resto) {
    //
    // }
    function incentivarQuester(mensagem, ...nomes) {
       nomes.map(nome =>  console.log(`${mensagem}, ${nome}!`)) }

    incentivarQuester('Bom dia', 'Deco', 'João', 'Maria');