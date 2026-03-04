// Faça um aplicativo para a companhia de energia elétrica, o App deve mostrar os números das casas de um rua, bem como a quantidade de KV/h consumido e o total a ser pago em reais.
// Para nossa sanidade cada KV/h corresponderá a R$ 0,50 na conta de luz. 
// O Aplicativo deve listar os dados de 5 casas, juntamente com o valor do total, conforme layout abaixo, pode usar as mesmas informações, porém o resultado não deve ser chumbado no texto e sim calculado com base nos valores do KV/h e o valor por KV/h:

// Casa	 nº: 14		KV/h: 230	R$: 115,00
// Casa	 nº: 35		KV/h: 120	R$: 60,00
// Casa	 nº: 54		KV/h: 350	R$: 175,00
// Casa	 nº: 71		KV/h: 410	R$: 205,00
// Casa	 nº: 92		KV/h: 70	R$: 35,007

const precoPorKwh = 0.50;

const casas = [
    { numero: 14, kwh: 230 },
    { numero: 35, kwh: 120 },
    { numero: 54, kwh: 350 },
    { numero: 71, kwh: 410 },
    { numero: 92, kwh: 70 }
];

console.log("  VALOR DE CONSUMO DE ENERGIA   ");

casas.forEach(casa => {
    const valorPorCasa = casa.kwh * precoPorKwh;

    const numeroFormatado = casa.numero.toString().padEnd(2);
    const kwhFormatado = casa.kwh.toString().padEnd(3);
    const reaisFormatado = valorPorCasa.toFixed(2).replace('.', ',');

    console.log(`Casa nº: ${numeroFormatado} \t KV/h: ${kwhFormatado} \t R$: ${reaisFormatado}`);
});

const totalGeral = casas.reduce((acc, casa) => acc + (casa.kwh * precoPorKwh), 0);
console.log(`TOTAL de valor da RUA: R$ ${totalGeral.toFixed(2).replace('.', ',')}`);