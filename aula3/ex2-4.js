var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//a)
var nomeAplicacao = "FIAP";
//b)
var totalSalarioMes = 0.0;
//c)
var diasFaturamento = 30;
//d)
var notasAluno = [];
notasAluno[0] = 8.5;
notasAluno[1] = 8.0;
notasAluno[2] = 9.0;
console.log("notas Aluno 1: " + notasAluno);
//copiar um array para outro
var notasAluno2 = __spreadArray([], notasAluno, true);
console.log("notas Aluno 2: " + notasAluno2);
var carro = {
    placa: "ABC-1234",
    chassi: "999999999999999",
    modelo: "Fusca",
    ano: 1990,
    cor: "Azul",
    nomeDono: "Roberta"
};
console.log("Carro: " + carro.modelo + " - Placa: " + carro.placa);
//f)
var numeroOuro = 1.61803;
//g)
var nomesAlunos = ["João", "Maria", "Pedro", "Ana"];
console.log("Nomes dos alunos: " + nomesAlunos);
//h) 
var qtdParesTenis = 5;
