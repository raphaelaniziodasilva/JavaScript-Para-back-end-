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

// o cliente poupança herdou da class Cliente
class clientePoup extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {

        // herdando as propriedade da class Cliente
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
    }
}

const alba = new clientePoup("Albameyang", "11302112000", "alba@gmail.com", 125, 386)
console.log(alba)

alba.depositarPoupanca(25)
console.log(alba)