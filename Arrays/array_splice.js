const month = ["janeiro","feveireiro","maio","segunda","terça"];

//para REMOVER elementos:
month.splice(3,2); //(a partir de qual indice deve alterar, quantos elementos serão apagados)
month.splice(2,0,"março","abril"); //(a partir de qual indice deve alterar, quantos elementos serão apagados, daqui em diante o que será inserido.)
console.log(month);

//os elementos excluidos sao salvos dentro de um array e é possivel visualizar, 
//basta declarar uma variavel para o splice.