const itens = ["arroz", "feijão", "farinha","azeite"];

for(let i = 0; i < itens.length; i++){
    console.log("->", itens[i]);
}

//forma mais simples de usar um array.
for(const item of itens){
    console.log("->", item);
}