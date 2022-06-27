//Exercicio calcular média
const promp = require("prompt-sync")();

const valor1 = promp("Digite o valor 1: "); //nessa forma o valor é recebido como String
const n1n = Number(valor1); //feita a conversao de String para Number
const valor2 = promp("Digite o valor 2: ");
const n2n = Number(valor2);
const valor3 = promp("Digite o valor 3: ");
const n3n = Number(valor3);

const media = (n1n+n2n+n3n)/3;


console.log("A média da soma é:", media);

/*Para que um número seja retornado como número, devemos utilizar  o comando 'Number'
para converter o valor recebido como String para Number.*/