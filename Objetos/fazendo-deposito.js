/* Desafio Fazendo depósitos 
 Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancarias
*/
const cliente = {
    nome: "Messi",
    idade: 38,
    cpf:"4578954845",
    email: "messi10@gmail.com",
    telefones: ["11954778478", "11945847809"],
    dependentes: [{
        nome: "Luiza, Loseno",
        idade: 16,
        parentesco: "Filha",
        dataNascimento: "08/05/2007"
    }, 
    {
        nome: "Mini Messi",
        idade: 27,
        parentesco: "Filho",
        dataNascimento: "01/09/1994"
    }],
    saldo: 45,

    // vamos adicionar uma função para poder efetivar o deposito ou seja essa função vai pegar o saldo e adicionar o deposito que foi feito
    depositar: function(valor) {
        this.saldo += valor
    }

    // Utilizamos funções para dar comportamento para o objeto pode ser depositar, sacar etc..
}
console.log(cliente.saldo)
cliente.depositar(55)
console.log(cliente.saldo)


// Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"
   
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
