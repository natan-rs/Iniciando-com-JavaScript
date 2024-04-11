// Desafios
// -----------------------------------------------------------------------------------------------


// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 1
let numberTwo = 3
let resultOne = numberOne + numberTwo
alert("A soma dos dois números é: " + resultOne)

// Crie um script que declare uma variável e verifique se o seu valor é um número. 
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const numberOrString = "12"
if(typeof numberOrString == 'number') {
  alert("É um número")
} else {
  alert("Não é um número")
}

// Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const stringOrNumber = 25
if(typeof stringOrNumber == 'string') {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const decision = true
if(typeof decision == 'boolean') {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberThree = 91
let numberFor = 16
let resultTwo = numberThree - numberFor
alert("A subtração dos dois números é: " +resultTwo)

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberFive = 4
let numberSix = 12
let resultThree = numberFive * numberSix
alert("A multiplicação dos dois números é: " +resultThree)

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberSeven = 10
let numberEight = 5
let resultFor = numberSeven / numberEight
alert("A divisão dos dois números é: " +resultFor)

// Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberNine = 74
if(numberNine % 2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numberTen = 51
if(numberTen % 2 == 1) {
  alert("É um número ímpar")
} else {
  alert("Não é um número par")
}
