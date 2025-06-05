import readLine from 'readline-sync';

//01
//let dia = Number(readLine.question("Informe o dia da semana: "));
let dia = readLine.questionInt("Informe o dia da semana: ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Valorinválido! \nInforme o valor no intervalo de 1 a 7.");
        break;
}
//02

let mes = readLine.questionInt("Informe o mês: ");

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;

    default:
        console.log("Valor inválido! \nInforme o valor no intervalo de 1 a 12.");
        break;
}

//03
let x = readLine.questionFloat("Informe o primeiro valor: ")
let y = readLine.questionFloat("Informe o segundo valor: ")
let op = readLine.questionInt("Escolha a opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão: ");

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("Opção inválida!")
        break;
}

//04

let salario = readLine.questionFloat("informe seu sálario: ")
let cat = readLine.question("informe a categoria de bonificação: ")
let bonus = 0

switch (cat) {
    case "A":
        bonus = salario * 0.05;
        console.log(`Novo salario ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case "B":
        bonus = salario * 0.10;
        console.log(`Novo salario ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case "C":
        bonus = salario * 0.15;
        console.log(`Novo salario ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case "D":
        bonus = salario * 0.20;
        console.log(`Novo salario ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;

    default:
        console.log("Categoria inválida!");
        break;
}