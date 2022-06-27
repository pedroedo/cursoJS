/*Para instalar o plugin do Json responsável pelo Input/Output (leitura de dados via teclado),
basta acessar o terminal e inserir o comando npm install prompt-sync*/

/*Para I/O, é necessário dizer que o programa irá usar o pacote que foi instalado.
Deve declarar uma variável que receberá o comando 'require()' que importa um determinado pacote.
(neste caso o pacote instalado foi o prompt-symc)*/

const promp = require("prompt-sync")(); //declara a variavel 'promp' que recebe o pacote instalado
const nome = promp("Qual é o seu nome? "); //declara a variavel 'nome' que recebe o valor que será digitado
console.log("Olá, ", nome + "! Bem vindo!");

/*A execução de um I/O deve ser feita pelo terminal, pois o VSCode não lê pelo DEBUG.
Para executar basta utilizar 'node ./nomedapasta/nomedoarquivo.js*/