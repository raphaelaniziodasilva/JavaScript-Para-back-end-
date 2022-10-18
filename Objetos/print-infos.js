/* Desafio Printar infos
 Acessar um objeto com informações de um cliente e exibir as informações no console
*/
const jogador = {
    nome: "Pedro",
    idade: 24,
    cpf: "12578936577",
    email: "pedro@gmail.com",
    time: "Flamengo"
}
// acessando as infirmações do jogador e acessando somente os tres primeiros numeros do cpf para manter a segurança do jogador
console.log(`Jogador: ${jogador.nome}, Idade: ${jogador.idade} e Time: ${jogador.time} CPF: ${jogador.cpf.substring(0, 3)}********`)

