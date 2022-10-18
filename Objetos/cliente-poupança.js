/* Desafio Cliente poupança
 Aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas popanças
*/
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

// Vamso definir um objeto no construtor baseando no objeto cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {

    /* Agora vamos ter que relacionar o cliente poupança com o Cliente, para isso vamos chamar o construtor Cliente para dentro cliente poupança

    Para que o cliente poupança possa herdar todas as propriedades e comportamentos do Cliente

    O metodo call() vai la no construtor cliente e vai trazer as propriedades de dentro dele para dentro de cliente poupança
    
    Agora precisamos passar dentro do parametro de call() quais são as propriedades que queremos chamar pois não precisaremos de todas
    */ 

    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

// chamando a instancia, criando e imprimindo um cliente poupança
const David = new ClientePoupanca("Devid Neres", "98756455414", "neres@gmail.com", 248, 897)
console.log(David)

// criando função para fazer deposito na conta poupança

// Vamos adicionar ao prototipo do objeto cliente poupança ou seja vamos acessar o objeto poupança entrar dentro do prototype e adicionar um novo metodo a essa propriedade que e uma função 
ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

// Adicionando dinheiro na poupança
David.depositarPoup(330)
console.log(David.saldoPoup)

