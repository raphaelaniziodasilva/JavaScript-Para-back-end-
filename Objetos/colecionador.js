const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",

    // Vamos adicionar dinamicamente uma série de tipos de quadrinhos à lista de tipos do objeto colecionador
    adicionarTipo:function(propriedade,tipo){
    this[propriedade].push(tipo)

    // Depois vamos adicionar a definição do objeto com o seguinte código:
    for(i = 0; i < 4; i++) {
        colecionador.adicionarTipo("tipocolecao","HQ"+i)
    }
    }
}
// Agora, para exibir o valor da propriedade nome
console.log(colecionador.nome)

// acessamos o nome usando os colchetes
console.log(colecionador["nome"])

console.log(colecionador)
