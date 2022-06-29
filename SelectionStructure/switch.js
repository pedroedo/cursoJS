//switch é utilziado para substituir um uso grande de If e else If.
//Switch só é possivel testar igualdade.

const priority = 4; //declarada a variavel priority com valor de 1

switch(priority){ //dentro do parenteses do switch, deve colocar de quem vai fazer a checagem. No caso, a variavel declarada.
    case 1: //o case é como se fosse o if. Ela tem valor de SE.
        console.log("ALTA");
        break; //deve ser usado um break ao final de cada case.
    case 2:
        console.log("MÉDIA");
        break;
    case 3:
        console.log("BAIXA");
        break;
    default: //é como se fosse o ELSE
        console.log("PRIORIDADE INVÁLIDA");
}