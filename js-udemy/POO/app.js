class Pessoa {
    nome;
    sobrenome;
    idade;
    #cpf;

    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.#cpf = cpf;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}.`)
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCPF){
        this.#cpf = novoCPF;
    }
}

class Aluno extends Pessoa {
    #serie;
    #turma;

    constructor(nome, sobrenome, idade, cpf, serie, turma){
        super(nome, sobrenome, idade,cpf);
        this.#serie = serie;
        this.#turma = turma;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e faço a ${this.#serie}º.`)
    }

    get serie(){
        return this.#serie;
    }
    get turma(){
        return this.#turma;
    }
}

class Professor extends Pessoa {
    disciplina;
    horas;

    constructor(nome, sobrenome, idade, cpf, disciplina, horas){
        super(nome, sobrenome, idade,cpf);
        this.disciplina = disciplina;
        this.horas = horas;
    }
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e sou professora ${this.disciplina}.`)
    }
}
/*const funcionario1 = new Pessoa("Maria", "Bonita", 25, 10020030045);
//const funcionario2 = new Pessoa ("José", "Jatobá", 48)
console.log(funcionario1);
funcionario1.saudacao();
//console.log(funcionario1.cpf);
funcionario1.cpf = 50040030021;
console.log(funcionario1.cpf)
//console.log(funcionario2.sobrenome);
//funcionario2.saudacao();
*/

/*
//Herança
const aluno1 = new Aluno("Giovana", "Ribeiro", 7, 20020020011, 2, "gama");
console.log(aluno1);
aluno1.saudacao();

const prof1 = new Professor("Karina", "Silva", 30, 65432101234, "polivalente", 40);
console.log(prof1);
prof1.saudacao();
*/

//polimosfimo
const aluno1 = new Aluno("Giovana", "Ribeiro", 7, 20020020011, 2, "gama");
console.log(aluno1);
aluno1.saudacao();

const prof1 = new Professor("Karina", "Silva", 30, 65432101234, "polivalente", 40);
console.log(prof1);
prof1.saudacao();
