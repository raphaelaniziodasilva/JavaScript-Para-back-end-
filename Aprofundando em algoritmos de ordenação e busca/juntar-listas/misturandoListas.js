// importando as listas
const {Programacão1, Programacao2} = require("./listas")

function juntarListas(lista1, lista2) {

    // vamos precisar de variaveis para controlar a posição de cada lista 
    let posicaoAtualLista1 = 0 // posiçõ da lista 1
    let posicaoAtualLista2 = 0 // posição da lista 2
    let posicaoAtualListafinal = 0 // posição da lista final

    // criando uma variavel lista final vazia para receber todos os elementos quando a comparação dos valores de cada elemento for feita
    let listaFinal = []

    // vamos percorrer pelas duas listas a partir da posição atual
    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {

        // As variaveis com o nome de posições atual elas cuidam so do indices elas não tem o dado o objeto com o titulo e valor 

        // vamos criar duas variavel para receber o produto da lista 1 e outra para receber produto da lista 2

        let skcnsaksna = lista1[posicaoAtualLista1]
        let produtoLista2 = lista2[posicaoAtualLista2]

        // observando as comparações
        console.log(`Comparando ${produtoLista1.titulo} com ${produtoLista2.titulo}`)

        // vamos fazer a comparação dos valores das listas. Comparando se produtoLista1 esta mais barato que o produto da produtoLista2
        if(produtoLista1.valor < produtoLista2.valor) { 

            // vamos passar o dado objeto para dentro da listaFinal. Precisamos controlar a posição da lista atual 
            listaFinal[posicaoAtualListafinal] = produtoLista1
            posicaoAtualLista1++ // para ir amumentando o valor da posição para poder percorrer por todo array
        } else {
            listaFinal[posicaoAtualListafinal] = produtoLista2
            posicaoAtualLista2++ //  amumentando o valor da posição
        }
        // para aumentar o valor da posição da lista final que começa na posição 0 também e colocando os elemnetos em seus lugares
        posicaoAtualListafinal ++
    }

    // Verificando se ainda existe elementos na lista 1 se exitir vamos jogar dentro da lista final. Aqui não estamos fazendo comparação de nehum valor so estamos jogando os elemnetos que sobraram na lista 1
    while(posicaoAtualLista1 < lista1.length) {
        listaFinal[posicaoAtualListafinal] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++ //  amumentando o valor da posição
        posicaoAtualListafinal++ //  amumentando o valor da posição
    }

    // Verificando se ainda existe elementos na lista 2 se exitir vamos jogar dentro da lista final. Aqui não estamos fazendo comparação de nehum valor so estamos jogando os elemnetos que sobraram na lista 2

    while(posicaoAtualLista2 < lista2.length) {
        listaFinal[posicaoAtualListafinal] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++ // amumentando o valor da posição
        posicaoAtualListafinal++ // amumentando o valor da posição
    }
    
    // retornando a lista final ordenada pelo menor valor
    return listaFinal
}
// chamando a função e passando as listas como parametro
console.log(juntarListas(Programacão1, Programacao2))

