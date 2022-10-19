// importando a lista
const listaLivros = require("./ListaOrdenada")

// função para fazer a busca do valor que esta dentro da lista ordenada. Os parametros de: indice aonde começa fazer a busca e ate: o indice ate onde vai porque vamos trabalhar com fatias do array 
function busca(array, de, ate, valorBuscado) {
    // encontrando o meio da lista: array
    const meio = Math.floor((de + ate) / 2)

    // para acessar o objeto a propriedade preço para poder fazer a comparação 
    const atual = array[meio]

    // para a função parar de se executada e não entrar em looping infinito
    if(de > ate) {
        return -1
    }

    // se o elemento do meio for justamente o valorBuscado que estamos procurando
    if(valorBuscado === atual.preco) {
        return meio
    }

    // Aqui vamos usar a recurção para fazer a busca. Cada vez que a gente chamar a função busca vamos passar valores atualizados de inicio e de fim do array para fazer a busca dentro dele e ai vamos diminuir fatiar, fatiar esse array ate que caia na situação de valor buscado e igual a atual.preco e ai encontrou o elemento vai retornar o indice do elemento 

    // se valorBuscado for menor que o que estamos buscando
    if(valorBuscado < atual.preco) {
        return busca(array, de, meio -1, valorBuscado)
    }

    // se valorBuscado for maior que p que estamos procurando 
    if(valorBuscado > atual.preco) {
        return busca(array, meio +1, ate, valorBuscado)
    }
    // vai nos retornar a posição aonde esta o elemento
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 30))