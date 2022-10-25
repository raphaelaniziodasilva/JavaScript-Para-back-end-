export default class User {
    // a sintaxe de atributos privados no javascript ela funciona pasando uma # antes da declaração de cada propriedade do objeto
    #nome
    #email
    #nascimento
    constructor(nome, email, nascimento, role, ativo = true) {
        // temos que passar a # no construtor também depois do this.
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.role = role || "estudante"; // se não for passado nenhum valor ele ser estudante
        this.ativo = ativo;
    }

    // temos que passar a # nas função também depois do this.
    exibirInfos() {
        return `Nome: ${this.#nome} - Email: ${this.#email}`
    }

    // Atributos Privados e um atributo que a gente so consegue acessar por dentro da classe
    // Propriedades privadas so podem ser acessadas por funções que estão dentro da classe não consegue ser acessada por fora  
}


