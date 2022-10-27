// Podemos supor que, na classe User, seja necessário separar as propriedades de nome e sobrenome dos usuários, pois a base de dados guarda cada uma dessas informações em campos separados. Porém, em todas as comunicações que levam o nome do usuário, nome e sobrenome devem aparecer juntos.
// Uma forma de resolver isso seria através do setter de nome.

export default class User {
    // privando as propriedades
    #nome
    #sobrenome
    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome
    }
    // A questão agora é que nome e sobrenome devem ser unidos no getter (para serem “mandados” para fora da classe como um único dado) e separados no setter, pois o método sempre receberá um nome completo e #nome e #sobrenome são propriedades diferentes que estão salvas no banco em campos separados.
    // começando pelo get para poder exporta as pripriedades privadas para poder ser usada fora da classe
    get nome() {
        return this.#nome
    }
    get sobrenome(){
        return this.#sobrenome
    }

    // agora os setters definir propriedades para alterar propriedades que são privadas 
    set nome(novoNome) {
       if(novoNome === "") {
        throw new Errpr("formato não válido campo vazio")
       }

       let [nome, ...sobrenome] = novoNome.split(" ")
       sobrenome = sobrenome.join(" ")
       this.#nome = nome
       this.#sobrenome = sobrenome
    }
    //Por fim, podemos juntar as duas propriedades para retornar o nome completo:
    get nomeCompleto() {
        return `${this.#nome} ${this.#sobrenome}`
    }

    // Durante a aula conhecemos os chamados assessors, ou métodos que dão acesso a determinadas propriedades. Os getters retornam valores e os setters definem valores.
  
}