interface Aluno {
    curso: string;
    ra: number;
    nome: string;
}

const aluno1: Aluno = {
    curso: "Analise de desenvolvimento de sistemas",
    ra: 565834,
    nome: "Mariana Inoue"
}

console.log("Aluna da Fiap do curso: " + aluno1.curso + " RA: " + aluno1.ra + " Nome: " + aluno1.nome)