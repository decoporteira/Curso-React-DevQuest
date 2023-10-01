let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if(typeof chaleiraEstaNoFogao !== "boolean") throw "Somente tipo booleano" 
       

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve();
      console.log("Começando o processo de ferver a água");
    } else {
        const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água";
      reject(mensagemDeErro);
      
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};


async function fazerCafe() {
    try { 
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
        const cafePassado = await passarCafe(aguaFervida);
        const cafeTomado = await tomarCafe(cafePassado);
        const xicaraLavada = await lavarXicara(cafeTomado);

    } catch (error) {
        console.log(error);
    } finally { 
        console.log("Sempre executa");
    }
}

fazerCafe();
