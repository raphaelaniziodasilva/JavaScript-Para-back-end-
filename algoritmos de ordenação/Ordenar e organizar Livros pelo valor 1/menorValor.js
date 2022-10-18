// Aqui vamos pegar o menor valor que tem dentro da lista

const livros = require('./listaLivros');

// criando a função para pegar o menor valor, essa função vai ter que receber um array, e essa função vai ter que rodar a partir de uma posição inicial do array para poder percorrer e fazer as comparações dos valores 
function menorValor(arrProdutos, posicaoInicial) {

  // criando a variavel para guardar o valor mais barato da lista
  let maisBarato = posicaoInicial;
  
  // criando um lopping: laço de repetição para percorrer toda a lista e pegar o valor mais barato de toda a lista
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual
    }
  }
  // a função vai me retornar o valor mais barato
  return maisBarato;
}
// exportando a função para poder usar na ordenação
module.exports = menorValor;