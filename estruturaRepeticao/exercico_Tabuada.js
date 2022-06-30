/**
 *      --EXERCICIO--
 * 
 * Crie um gerador de tabuada de um número específico, solicitado via teclado.
 * A tabuada deve mostrar os valores da multiplicação de 1 até 10.
 */
const prompt = require("prompt-sync")();

const num = Number(prompt("Tabuada do... "));
let n = 1;

while(n <= 10){
    console.log(num + " x " + n + " = " + (num * n));
    n++;
}