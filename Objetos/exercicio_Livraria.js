/**
 *      --EXERCICIO--
 * Escreva um programa que armazena em um array um conjunto de livros, onde cada livro é um objeto que contem as propriedades
 * "nome", "ano", e "id". Crie então uma função que, com base no ID de um livro, retorne o livro correspondente.
 */

const conjunto = new Array(
    {
        name: "Livro #1",
        ano: 2000,
        id: 1
    },
    {
        name: "Livro #2",
        ano: 2010,
        id: 2
    },
    {
        name: "Livro #3",
        ano: 2020,
        id: 3
    },
);

function retornar(id){
    for(book of conjunto){
        if(id == book.id){
            return book;
        }
    }
    return null;
}

console.log(retornar(2));
console.log(retornar(1).name);