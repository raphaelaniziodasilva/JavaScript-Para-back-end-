/* Herança: vamos herdar aqui no admin todas as informações e metodos que tem na entidade User
A herança de classes ela funciona para trazer as propriedades e os metodos 
*/

// importando a bliblioteca chalk
import chalk from "chalk";
import { Console } from "console";

// importando a entidade User
import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCruso(nomeCruso, vagas) {
        return `Curso de ${nomeCruso} contém ${vagas} Vagas`
    }
}

const novoAdmin = new Admin("Majinbu", "maj@gmail.com", "10-08-2019")
console.log(novoAdmin)
console.log(chalk.green(novoAdmin.criarCruso("Node.js with JavaScript", 23)))

