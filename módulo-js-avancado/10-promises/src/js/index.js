/*

Pendente
realizada Resolve
Recusada Reject
Estabelecida
*/

//new Promise((resolve, reject) => {    
    //resolve()
    //resolve e reject são funções 
    //})


    let chaleiraEstaNoFogao = true;
    let fogaoEstaLigado = false;

    let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
        return new Promise((resolve, reject) => {
            if (chaleiraEstaNoFogao && fogaoEstaLigado) {
                console.log("Começando o processo de ferver a água...")
                resolve()
            } else {
                console.log('É necessário ligar o fogão e coloca a chaleira em cima')
                reject()
            }
        })}

        ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        console.log('Fazendo o café...')