/*Outra forma de fazer um SE SENAO em operações simples de 1 resultado.

    > faça a condição
    > utilize '?' para SE (testa a condição)
    > utilize ':' para SENAO

*/

const n = 1;
let r;

//usando estrutura IF padrão
// if(n % 2 == 0){
//     r = "PAR";
// }else{
//     r = "IMPAR";
// }

//usando operador TERNARIO
r = n % 2 == 0 ? "PAR" : "IMPAR";
console.log(r);