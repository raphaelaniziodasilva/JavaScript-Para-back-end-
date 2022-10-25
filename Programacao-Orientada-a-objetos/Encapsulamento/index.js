import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Antony", "ant@gmail.com", "2022/08/11")
console.log(novoUser)
console.log(novoUser.exibirInfos())

//novoUser.#nome = "Goku"
//novoUser.#email = "meli@gmail.com"
//novoUser.#nascimento = "10-02-2012"

// Os atributos privados eles servem para impedir o acesso de outras partes do codigo a um determinado dado no caso uma propriedade ou pode ser um metodo que não pode ser acessado também por fora da classe so pode ser acessado por dentro da classe 
