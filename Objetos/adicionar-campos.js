/* Deafio Adicionando campos
 Adicionar informações importantes que ainda estão faltando, telefone e seus valores 
*/
const cliente = {
    nome: "Pedro",
    idade: 24,
    cpf: "12578936577",
    email: "pedro@gmail.com"
}
console.log(cliente)

// Adicionando o campo telefone com seu valor dentro do objeto cliente
cliente.telefone = "(11) 952779570"
console.log(cliente)    

// trocando o número do telefone do objeto
cliente.telefone = "(17) 978669923"
console.log(cliente)


// deletando um conjunto de chave/valor?
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
console.log(objPersonagem)

// removendo a propriedade aliado, podemos utilizar o operador delete
delete objPersonagem.aliado

console.log(objPersonagem)

// Também é possível utilizar a notação de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem)
console.log(objPersonagem)