/* Desafio Acessar chaves 
 Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela 
*/
const jogador = {
    nome: "Pedro",
    idade: 24,
    cpf: "12578936577",
    email: "pedro@gmail.com",
    time: "Flamengo"
}
// consultando uma informaçãos do objeto pelo array
                 //0     //1     //2    //3     //4
const chaves = ["nome", "idade", "cpf", "email", "time"]

console.log(jogador[chaves[3]])

// acessando todas as informações do objeto pelo array
chaves.forEach(info => console.log(jogador[info]))
