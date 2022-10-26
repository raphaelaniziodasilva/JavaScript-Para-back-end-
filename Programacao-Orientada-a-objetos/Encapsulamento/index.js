import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// Propriedades privadas User

const novoUser = new User("Antony", "ant@gmail.com", "2022/08/11")
//console.log(novoUser)
//console.log(novoUser.exibirInfos())

//novoUser.#nome = "Goku"
//novoUser.#email = "meli@gmail.com"
//novoUser.#nascimento = "10-02-2012"

// Os atributos privados eles servem para impedir o acesso de outras partes do codigo a um determinado dado no caso uma propriedade ou pode ser um metodo que não pode ser acessado também por fora da classe so pode ser acessado por dentro da classe

// Metodo privado User
const usuario = new User("Dabura", "dab@gmail.com", "01-03-1992")
//console.log(usuario.#montarObjectUser())

// As informações do Admin também vao ser privadas por causa que essas informações estão sendo herdadas pela classe User
const novoAdmin = new Admin("Picolo", "pc@gmail.com", "12-10-1990")
//console.log(novoAdmin.exibirInfos())


// Usando o metodo get para pegar as informações que estão privadas
const newUser = new User("Brolly", "brolly@gmail.com", "15-07-2019")

// quando fizermos as chamadas dos atributo que esta no metodo get não precisamos chamar o metodo como se fosse uma função podemos chamar como uma propriedade
console.log(newUser.nome)
console.log(newUser.email)
console.log(newUser.nascimento)