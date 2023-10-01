// sincrona - executa uma linha de cada vez, de forma sequencial

// assincrona - não espera a linha do código anterior terminar para executar a próxima linha

function colocarAguaParaFerver() {
  console.log("Colocar água para ferver");

  setTimeout(() => {
    console.log("água fervida");
    passarOCafe();
  },5000)
};

function prepararParaPassarOCafe() {
  console.log("pegar o pó de café");
  console.log("pegar o filtro de papel");
  console.log("colocar o café no filtro");
  console.log("colocar o filtro em cima da xícara");
}

function passarOCafe() {
  console.log("passando o café");
}

colocarAguaParaFerver()
prepararParaPassarOCafe()