//const n = Number.MAX_SAFE_INTEGER; -> maior numero inteiro que o JavaScript consegue criar.
//const n = BigInt("57495745897435897493084903843298490");
const n = 57495745897435897493084903843298490n; //outra forma de escrever um BigInt, basta colocar um N no final.
const b = 0b1010n;
const h = 0x12Fn;

console.log(n);
console.log(typeof n);

console.log(b);
console.log(h);

//console.log(100n + 10);
//Math.pow(10n, 2);