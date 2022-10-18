class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

// fazendo a instancia criando um cliente
const sane = new Cliente("Leroy Sane", "12547533254", "leroy@gmail.com", 754)

console.log(sane)

// depositando valor, chamando o metodo depositar
sane.depositar(34)

// exibindo o saldo, chamando o metodo exibiSaldo
sane.exibirSaldo()

console.log(sane)