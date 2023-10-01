const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    // return "Primeiro nome " + primeiroNome + " e último nome " + ultimoNome + " e idade " + idade + " anos.";
   return `Olá, meu nome é ${primeiroNome} ${ultimoNome} e tenho ${idade} anos.`;
}

console.log(imprimirInformacoesPessoa("Raphael", "Barbosa", 30));