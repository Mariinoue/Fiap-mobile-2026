//a)
var nomeAplicacao: string = "FIAP";

//b)
let totalSalarioMes: number = 0.0;

//c)
const diasFaturamento: number = 30;

//d)
const notasAluno: Array<number> = [];
notasAluno[0] = 8.5;
notasAluno[1] = 8.0;
notasAluno[2] = 9.0;

console.log("notas Aluno 1: " + notasAluno);

//copiar um array para outro
const notasAluno2: Array<number> = [...notasAluno];
console.log("notas Aluno 2: " + notasAluno2);

//e)
interface Carro {
    placa: string;
    chassi: string;
    modelo: string;
    ano: number;
    cor: string;
    nomeDono: string;
}

const carro: Carro =
{
    placa: "ABC-1234",
    chassi: "999999999999999",
    modelo: "Fusca",
    ano: 1990,
    cor: "Azul",
    nomeDono: "Roberta"
};

console.log("Carro: " + carro.modelo + " - Placa: " + carro.placa);

//f)
const numeroOuro: number = 1.61803

//g)
const nomesAlunos : Array<string> = ["João", "Maria", "Pedro", "Ana"];
console.log("Nomes dos alunos: " + nomesAlunos);

//h) 
let qtdParesTenis: number = 5;