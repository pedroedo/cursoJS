//Exercicio calcular média
const promp = require("prompt-sync")();

const valor1 = promp("Digite o valor 1: "); //nessa forma o valor é recebido como String
const n1n = Number(valor1); //feita a conversao de String para Number

//o certo é fazer da seguinte forma -> const valor1 = Number(promp("Digite o valor 1: "));

const valor2 = Number(promp("Digite o valor 2: "));
const valor3 = Number(promp("Digite o valor 3: "));

const media = (n1n+valor2+valor3)/3;


console.log("A média da soma é:", media);

/*Para que um número seja retornado como número, devemos utilizar  o comando 'Number'
para converter o valor recebido como String para Number.*/