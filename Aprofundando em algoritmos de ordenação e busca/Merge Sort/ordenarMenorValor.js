// importando a lista
const Programacão = require("./Lista")

// Como estamos trabalhando com uma unica lista aonde tem varios livros dentro dela, vamos pegar esse array e quebrando divindido em 2 e divindido em 2 ate que agente tenha partes bem menores de dois elementos para fazer as comparações e trocar de lugares e depois juntando tudo dentro do unico array
function mergeSort(lista) {
    
    // vamos ter que dividir o array ate desmontar ele completamente
    if(lista.length > 1) {

        // dividindo o array no meio. Math.floor para arredondar o número pois precisamos de numeros inteiros para trabalhar com indices
        const meio = Math.floor(lista.length / 2)

        // a partir do meio vamos dividir o array em duas partes usando o metodo slice que serve para fatiar os arrays em partes        
        const parte1 = mergeSort(lista.slice(0, meio))
        const parte2 = mergeSort(lista.slice(meio, lista.length))

        /* vamos fazer com que o mesmo array ele fique se desmontando ou seja ele vai ficar dividindo e dividindo e guardando parte da divisão em dois parte 1 parte 2
        Para fazer isso de forma recurssiva fazendo com que a função mergeSort se chame e va se chamando e se chamando ate que o array seja o menor possivel.
        
        Na parte 1 e 2 vamos chamar a função mergeSort e passando como parametro o slice
        */

        // Depois que o processo tiver sido executado a gente tem que ordenar, chamando a função de ordenação passando como parametro parte 1 e 2 que são as partes que a gente quer ordenar
        lista = ordena(parte1, parte2)      
    }

    return lista
}   

// crando a função para fazer a ordenação a partir do menor valor para o amior
function ordena(parte1, parte2) {
    posicaoAtualParte1 = 0
    posicaoAtualParte2 = 0   
    const ListaOrdenada = []

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        // recebendo o valor do array parte 1
        let produtoAtualParte1 = parte1[posicaoAtualParte1] 

        // recebendo o valor do array parte 2
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        // fazendo a comparação do valor mais barato
        if(produtoAtualParte1.valor < produtoAtualParte2.valor) {

            // vamos usar o metodo push que sempre vai mandar o valor que foi adicionado para o final do array
            ListaOrdenada.push(produtoAtualParte1)
            posicaoAtualParte1++ // atualizando o valor da posição
        }
        else {
            ListaOrdenada.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    // Agora vamos verificar se tem algum elemento sobrando em cada uma das partes. Vamos usar o metodo concat para a gente concatenar os arrays 
    return ListaOrdenada.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(Programacão))