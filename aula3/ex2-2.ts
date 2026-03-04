// Faça a tabela verdade dos operadores && (AND), || (OR), ! (NOT), ^ (XOR)

const a: boolean = true;
const b: boolean = false;

console.log("Tabela verdade dos operadores:");
console.log("As variaveis são A: " + a + " e B: " + b);
console.log("A && B: " + (a && b));
console.log("A || B: " + (a||b));
console.log("A XOR B: " + ((a || b) && !(a && b)));
console.log("!A: " + !a);
