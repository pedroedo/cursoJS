const person = { //para identificar um objeto criado basta usar {}.
    name: "Pedro",
    age: 30
};
const p = person.name; //armazena o valor de name do objeto person detro da variavel
person.age = 23; //aletra o valor de age 
const a = person.age;
person.aniv = 10; //cria uma nova propriedade dentro do objeto person.
delete person.aniv; //deleta uma propriedade de dentro do objeto.

console.log(person);
console.log(p);
console.log(a);