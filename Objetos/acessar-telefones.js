/* Desafio Lista de telefone
 Acessar a lista de números de telefones das pessoas cadastradas no sistema e imprimi-las, verificando se há mais de um número em algum cadastro
*/
const cliente = {
    nome: "Antonny",
    idade: 22,
    cpf:"4578963245",
    email: "antony@gmail.com",
    telefones: ["11954778950", "11933247800"]
}
// acessando somente o campo que contém os telefones
cliente.telefones.forEach(fone => console.log(fone))
