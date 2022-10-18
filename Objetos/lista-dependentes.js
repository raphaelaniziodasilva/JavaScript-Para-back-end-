/* Desafio Lista de dependentes
 Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente
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
    }]
}
// Adicionando mais dependentes na propriedade dependentes, sabendo que o dependente e um array que contém um objeto dentro dele podemos utilizar os metodos do array para adicionar um outro objeto de dependentes

cliente.dependentes.push({
    nome: "Mini Messi",
    idade: 27,
    parentesco: "Filho",
    dataNascimento: "01/09/1994"
})

console.log(cliente)

// Agora vamos acessar os dependentes entrar dentro do array e trazer uma informações de qualquer um dos dependentes vamos acessar o dependente filho
const filho = cliente.dependentes.filter(dependente => dependente.dataNascimento === "01/09/1994")

console.log(filho[0].nome)
