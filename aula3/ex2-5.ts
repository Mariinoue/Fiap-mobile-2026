// Crie uma variável do tipo objeto chamada skeep contendo as seguintes características, 
// e atribua valores numéricos a elas:
// 	energia
// 	velocidade
// 	temperatura
// 	humor
// Mostre na tela os valores das características do objeto skeep da seguinte maneira
// 	Energia ==> <valor da energia>
// 	Velocidade==> <valor da velocidade>
// 	Temperatura==> <valor da temperatura>
// 	Humor==> <valor do humor>

interface Skeep {
    energia: number,
    velocidade: number,
    temperatura: number,
    humor: number
}

const skeep: Skeep = {
    energia: 70,
    velocidade: 80,
    temperatura: 35,
    humor: 75
}

console.log("Energia==> " + skeep.energia);
console.log("Velocidade==> " + skeep.velocidade);
console.log("Temperatura==> " + skeep.temperatura);
console.log("Humor==> " + skeep.humor);