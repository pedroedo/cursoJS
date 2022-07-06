const fruit = ["banana","morango","maçã","abacate","uva"];

//adicionar elementos no FIM:
fruit.push("mamao");
fruit[fruit.length] = "abacaxi";

//adicionar elemento no INICIO:
fruit.unshift("laranja");

console.log(fruit.toString()); //toString converte o array para string, separado por virgula.

