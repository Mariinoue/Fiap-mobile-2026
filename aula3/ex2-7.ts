
// Faça uma função para um app que exiba um retângulo com 30 colunas e 
// 5 linhas usando o caracter '#', conforme abaixo:
// ##############################
// #                            #
// #                            #
// #                            #
// ##############################
// Dentro do quadro deverá existir os seguintes textos.
// Nome da faculdade
// Nome do Programa
// Feito por: Nome do Autor
// Nome da Faculdade, Nome do Programa e Nome do autor devem ser 
// passados como parâmetro para a função

import { text } from "node:stream/consumers"

function exibirRetangulo(nomeFaculdade: string, nomePrograma: string, autor: string) {
    const numColunas = 30
    const linhas = "#".repeat(numColunas)

    const formartLinha = (text: string) => {
        const antes = '#'
        const depois = '#'

        const espacosDisponiveis = numColunas - antes.length - depois.length
        const conteudo = text.substring(0, espacosDisponiveis).padEnd(espacosDisponiveis, ' ')
    
        return antes + conteudo + depois}

    console.log(linhas)
    console.log(formartLinha(nomeFaculdade))
    console.log(formartLinha(nomePrograma))
    console.log(formartLinha(`Feito por: ${autor}`))
    console.log(linhas)

}

exibirRetangulo("Fiap", "Programa de Mobile", "Mari")