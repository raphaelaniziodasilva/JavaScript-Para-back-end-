/* Desafio oferta de seguro
 Percorrer um objeto, verificar se existe a chave "dependentes" e, caso exista, enviar uma mensagem de oferta de seguro
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

/* vamos usar o metodo Object.keys() que vai nos retornar um array com todas as propriedades do objeto sem os seus valores

const propsClientes  = Object.keys(cliente)
console.log(propsClientes)
*/

// verificando se existe a chave "dependentes" se existir, enviar uma mensagem da oferta de seguro


function oferecerSeguro(obj) {

    /* vamos usar o metodo Object.keys() que vai nos retornar um array com todas as propriedades do objeto sem os seus valores e passando dentro dele o parametro obj
    */
    const propsClientes  = Object.keys(obj)

    /* fazendo a verificação se a propriedade dependente existe dentro do objeto
    includes() e um metodo de array do javascript que ele vai verificar se o array que estamos usando que e o propsClientes ele inclui um determinado dado que e o "dependentes"

    Passando o dado que queremos e ele vai verificar se ele existe no array ou não 
    */
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

// executando a oferta de seguro e passando o objeto dentro dele
oferecerSeguro(cliente)


// O metodo Object.values() que vai nos retornar um array com todos os valores do objeto
console.log(Object.values(cliente))

// O metodo Object.entries() que vai nos retornar um array com todas as propriedades e valores do objeto em estrutura de array
console.log(Object.entries(cliente))