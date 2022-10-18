/* Desafio Puxando relatorio
 Percorrer por um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco
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

// Aqui vamos pegar somente as informações basicas desse objeto como nome, idade, cpf, email e saldo apenas, sem mostrar o telefone e nem dependentes

// como vamos fazer para percorer o objeto sem precisar dos indices e array e sem precisar fazendo cliente.nome, cliente.idade e etc...

// vamos utilizar o metodo for in
// O metodo for in --> e um metodo do javascript que ele e para objetos 

let relatorio = "" // --> vai receber os valores depois

// vamos criar o metodo for e dentro dele cria a let chamada de let info: para cada info e uma das informações do cliente

for(let info in cliente) { // let info in --> dentro de "onjeto cliente"

    // exibindo apenas as informações básicas e para isso vamos usar o typeof

    // O typeof e uma palavra chave que usamos no javascript para identificar qual que e o tipo de dado

    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} --> ${cliente[info]}
        `
        // info: vai trazer os nomes das propriedades
        // cliente[info] vai trazer os valores das propriedades
    }
}

console.log(relatorio)

// for(let info in cliente) --> O metodo for in serve para percorrer objetos pela chave a string da chave    