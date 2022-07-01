/* a diferença do break para o continue é que o break para toda a repetição. Não testa mais a condição.
Já o continue ele para a interação (n++ por exemplo) e volta para a condição se ela ainda for verdadeira.
*/

let n = 0;
while(n < 100){
    console.log(n++);

    if(n == 50){
        break;
    }
}