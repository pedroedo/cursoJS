/*O comando 'const' é utilizado para declarar uma variável. Porém com o const,
não é possível alterar o valor atribuído a esta variável. Veja no exemplo.*/

const name = "Pedro";
//name = "Paulo"; //retora erro falando que não é possível alterar
console.log(name);

let nome = "Pedro";
nome = "Paulo"; //permite alterar o nome apenas passando um nome novo na variável 'nome'
console.log(nome)

/*Sempre que uma variável const é definida, deve ser atribuido um valor a ela,
caso contrário dará erro.*/