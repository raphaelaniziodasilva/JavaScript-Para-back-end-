/* Desafio Lista de dependentes
 Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica, para análise de outros departamentos de banco 
*/
const clientes = [
    {
        nome: "Mohamed Sala",
        idade: 34,
        cpf: "12345698733",
        dependentes: [
            {
                nome: "Arnold",
                parentesco: "Filho",
                dataNasc: "10/09/2014"
            },
            {
                nome: "Sofia",
                parentesco: "Filha",
                dataNasc: "04/02/2004"
            }
        ]
    },
    {
        nome: "Rick Grins",
        idade: 39,
        cpf: "44545665633",
        dependentes: [
            {
                nome: "Carl",
                parentesco: "Filho",
                dataNasc: "01/03/2006"
            },
            {
                nome: "Meg",
                parentesco: "Filha",
                dataNasc: "11/12/1990"
            }
        ]
    }
]

// acessando a lista, extraindo os dados e colocando todos esses dados dentro de um array. Acessando os dados da propriedade dependente

                 // objeto na posição 0 -       objeto na posição 1
const ListaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

// Os tres pontos "..." chamados de operador de espalhamento --> ele serve para espalhar o conteudo dentro do array 

// imprimindo o array de dependentes
console.log(ListaDependentes)

// O console.table vai imprimir as informações em formato de tabela
console.table(ListaDependentes)