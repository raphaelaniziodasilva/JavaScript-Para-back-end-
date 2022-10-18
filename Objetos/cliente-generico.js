/* Desafio Cliente generio
 Gerar uma função que permita a criação de novos clientes a partir de um modelo
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
// vamos criar um cliente que vai pegar a instancia do objeto Cliente aonde vamos usar as propriedades atribuindo valores

const Lautaro = new Cliente("Lautari martinez", "11245588799", "martinez@gmail.com", 540)

console.log(Lautaro)