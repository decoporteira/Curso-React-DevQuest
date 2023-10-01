// 1
// let name = prompt('Qual seu nome?')

// alert("Seja bem vindo(a), " + name +"!")

// 2
// let boletoPago = false

// boletoPago ? console.log('Boleto pago') : console.log('Boleto não está pago')

// 3

// 1 - Apresente uma pop up de confirmação (pode ser
//   usado o prompt mas existe outro método melhor para
//   isso) logo que o usuário acessar o site com a uma
//   mensagem para o aventureiro escolher as opções ok
//   ou cancelar, a mensagem deve ser "Seja bem vindo(a),
//   aventureiro(a)! Gostaria de pagar R$ 50,00 para passar
//   a noite na nossa hospedagem?";
//   2 - Se o aventureiro escolher passar a noite apresente
//   a mensagem "Ótimo! Nós temos as melhores camas
//   de toda a região!";
//   3 - Se o aventureiro escolher NÃO passar a noite
//   apresente a mensagem "Que pena! Você parecia ser
//   uma pessoa mais legal";
  
//   Lembre-se que para atingir esse resultado você vai
//   precisar utilizar variáveis e uma condição!

  // let choice = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?"); 

  // choice ? alert("Ótimo! Nós temos as melhores camas de toda a região!") : alert("Que pena! Você parecia ser uma pessoa mais legal") 

  // 4

//   1 - Crie um for que conte de 0 até 10 e apresente a a
// seguinte mensagem para cada número dentro do laço.
// "O número atual é o 0"
// "O número atual é o 1"
// ... e assim por diante até o número 10

// Para apresentar esses textos use o console.log

// let i = 0
// while (i <= 10 ){
//   console.log('O número atual é o ' + i)
//   i++
// }

// 5

// 1 - Crie um for que conte de 0 até 10

// 2 - Dentro desse laço você deve dobrar o número
// atual.

// 3 - Apresente a seguinte mensagem para cada número
// dentro do laço:

// "O dobro do número x é y"

// Dica: O x é o numero atual dentro do laço e o y é o
// dobro do x.

// Para apresentar esses textos use o console.log

for(let i = 0; i <= 10; i++){
  const double = i + i
  console.log("O dobro do número " + i + " é " + double)
}