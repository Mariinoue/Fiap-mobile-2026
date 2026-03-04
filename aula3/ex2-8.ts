// Faça um App e uma classe para representar um Aluno, contendo as 
// seguintes características e comportamentos:
// Caracteristicas:
// 	id
// 	nome
// 	ra
// 	nascimento
// Comportamentos :
// 	estudar()
// 	descansar()

// 	No código principal do App deve ser criado um objeto do tipo Aluno, e os valores das características devem 
// ser definidas para este objeto.
//  Faça com que os valores das características sejam mostrados na tela do App.

class Aluno {
    id: number;
    nome: string;
    ra: string;
    nascimento: string;

    constructor(id: number, nome: string, ra: string, nascimento: string,) {
        this.id = id;
        this.nome = nome;
        this.ra = ra;
        this.nascimento = nascimento
    }

    estudar(): void {
        console.log(`${this.nome} está estudadndo`)
    }

    descansar(){
        console.log(`${this.nome} está descansando`)
    }

}

const aluno1 = new Aluno(1, 'Astrogildo', '505050', '15/05/2000')

console.log("Id: " + aluno1.id);
console.log("Nome: " + aluno1.nome);
console.log("RA: " + aluno1.ra);
console.log("Nascimento: " + aluno1.nascimento);
aluno1.estudar()
aluno1.descansar()