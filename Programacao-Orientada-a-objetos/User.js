export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante"; // se não for passado nenhum valor ele ser estudante
        this.ativo = ativo;
    }
    exibirInfos() {
        return `Nome: ${this.nome} - Email: ${this.email}`
    }
}

//const novoUser = new User("Antony", "ant@gmail.com", "2022/08/11")
//console.log(novoUser)
//console.log(novoUser.exibirInfos())
