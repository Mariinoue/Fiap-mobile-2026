// Faça um programa que solicite ao usuário para informar o valor da umidade 
// atual do ambiente, correspondente a porcentagem de umidade no ar, 
// este programa deverá mostrar apenas uma das seguintes frases abaixo 

// O ar está úmido quando a umidade for maior que 60
// O ar está seco quando a umidade for maior igual a 30 e menor igual a 60
// O ar está muito seco quando a umidade for menor que 30

// Utilize o if encadeado para resolver esta questão

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Informe o valor da umidade atual do ambiente: ', (resposta) => {
    const umidade: number = parseFloat(resposta);

    if (isNaN(umidade)) {
        console.log('Por favor, informe um valor de umidade');
    } else {
        if (umidade > 60) {
            console.log('O ar está úmido quando a umidade')
        } else if (umidade >= 30) {
            console.log('O ar está seco')
        } else {
            console.log('O ar está muito seco')
        }
    }

    rl.close
})
