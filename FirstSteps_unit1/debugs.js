function createString(char, length){ /*define uma função chamada createString que serve para gerar um texto.
                                é passado um caractere para ela (char) e diz quantas vezes a letra vai aparecer na String (length)*/
    let str = "";

    for(let i = 0; i < length; i++){ //declara a variavel i com valor inicial de 0; cria a condição que enquanto o i for menor do que o número de vezes que aparecerá na tela; acrescenta de 1 em 1.
        str += char; //informa que o valor de str é igual a str + char.
    }

    return str;
}

const s1 = createString("1", 10);
console.log(s1);

const s2 = createString("-", 20);
console.log(s2);

const s3 = createString("X", 25);
console.log(s3);