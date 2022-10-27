// Atributos Privados e um atributo que a gente so consegue acessar por dentro da classe
// Propriedades privadas so podem ser acessadas por funções que estão dentro da classe não consegue ser acessada por fora  
export default class User {
    // a sintaxe de atributos privados no javascript ela funciona passando uma # antes da declaração de cada propriedade do objeto
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        // temos que passar a # no construtor também depois do this.
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante"; // se não for passado nenhum valor ele ser estudante
        this.#ativo = ativo;
    }

    // GET
    // O metodo get define quais atributos da classe podem ser exportada ou esposta para fora da classe privada
    // As funções get ou metodo get primeiro elas não recebem nehum argumento elas so retornam o que esta dentro dela 
    get nome() {
        return this.#nome
    }
    get email() { // precisamos fazer o metodo get para todas as propriedades que agente quer que seja acessadas fora da classe
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }

    /*SET
     O metodo set e usado para definir propriedades para alterar propriedades que são privadas ou que estão pivadas de uma forma segura
     O metodo set ele recebe um unico parametro e depois vamos defini como vai ser feita a substituição da propriede privada
    
     O set eles também são super importantes para proteger uma propriedade alteração critica 
    */
    set nome(novoNome) {
        // validando se quando a alteração do nome for feita se estiver vazio vai receber um erro se não estiver vazio vai receber o nome
        // toda a logica que envolve a modificação de uma propriedade ela pode ser feita aqui dentro do set
        if(novoNome === "") {
            throw new Error("Formato invalido não foi atribuido nenhum valor")
        }
        this.#nome = novoNome
    }


    // temos que passar a # nos metodos "funções" também depois do this.
    exibirInfos() {
        return `Nome: ${this.#nome} - Email: ${this.#email}`
    }

    /* Podemos também deixar os metodos "funções" como privado
    montarObjectUser() {
        return ({ // objeto literal
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
        // Os metodos privados eles existem justamente para proteger logica internas da classe entre outras coisas por ser um metodo privado significa que ele so e acessado por dentro da classe 
    }
    */

}