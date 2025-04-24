//01

let num1 = 50
let num2 = 45

let soma = (num1 + num2);
console.log("num1+num2:" +soma);

let sub = (num1 - num2);
console.log("num1-num2:" +sub);

let mult = (num1 * num2);
console.log("num1*num2:" +mult);

let div = (num1 / num2);
console.log("num1/num2:" +div)

//02

let idade1 = 20;
let idade2 = 19;

let resultado = idade1 < idade2 ?"O segundo e mais velho": "O primeiro e mais velho"
console.log(resultado);



//03
let idade = 20

let mensagem = idade >= 18? "menor de idade": "menor de idade";
console.log(mensagem);

//04

let numero = 20;
let verificação = (numero % 2 === 0) ? "par" : "ímpar";
console.log(`O numero ${numero} é ${verificação}`);
