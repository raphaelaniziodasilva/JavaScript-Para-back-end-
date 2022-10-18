// Aqui vamos fazer uma outra forma de algoritmo de ordenação

// importando a lista de livros
const livros = require("./listaLivros")

// O nome da função é insertSort vai ser uma função para fazer a ordenação a partir do menor valor ate o maior. insertSort porque vamos inserindo os elementos na posição correta com relação ao que vem antes dele
function insertSort(lista) {

    // vamos percorrer a lista
    for(let atual = 0; atual < lista.length; atual ++) {

        // criando uma variavel para olhar qual item esta sendo analisado por vez
        let analise = atual

        // dado o item atual que esta sendo analisado a genter quer que enquanto o valor do item que estamos analisando for menor do que o que vem antes a gente troca de lugar 

        // analise > 0 --> como não temos posição -1 porque no array a posição sempre começa com 0

        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            // guardando o valor do objeto que esta sendo analizado. Estamos acessando a lista na posição que estamos analisando no momento e guardando numa variavel os dados "objeto" que tem o nome do livro e preço 
            let itemAnalise = lista[analise]

            // fazendo a mesma coisa da variavel acima
            let itemAnterior = lista[analise -1]

            // Agora vamos realizar a troca de lugares 
            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise

            // No while temos que informar a condição de parada do looping no bloco de codigo para não entrar em looping infinito

            // Esse codigo vai parar de ser executado. Como a gente esta voltando  vamos passar a analise-- para dentro do while 
            analise--
        }
    }
    // imprimindo a lista no terminal
    console.log(lista)    
}
// chamando a função e passando como parametro a nossa lista de livros
insertSort(livros)