import User from "./User.js";
import chalk from "chalk";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante: ${estudante} - passou no Curso de ${curso}`
    }
}

const novoDocente = new Docente("Vegeta", "SSjblue@gmail.com", "20-10-1990")
console.log(novoDocente)
console.log(chalk.bgYellowBright(novoDocente.aprovarEstudante("Trunks","SSJBlue")))