/* Desafio Compondo um objeto
 Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco
*/
const cliente = {
    nome: "Ibraimovic",
    idade: 38,
    cpf:"4578954845",
    email: "ibra@gmail.com",
    telefones: ["11954778478", "11945847809"]
}
// adicionando dependentes ao objeto cliente
cliente.dependentes = {
    nome: "Beatriz",
    idade: 16,
    parentesco: "Filha"
}

console.log(cliente)

// fazendo alteração na propriedade dependentes
cliente.dependentes.nome = "Beatriz Ibramovick Suiss"

console.log(cliente)
