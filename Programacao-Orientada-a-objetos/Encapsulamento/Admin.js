/* Herança: vamos herdar aqui no admin todas as informações e metodos que tem na entidade User
A herança de classes ela funciona para trazer as propriedades e os metodos 
*/

// importando a entidade User
import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCruso(nomeCruso, vagas) {
        return `Curso de ${nomeCruso} contém ${vagas} Vagas`
    }
}

