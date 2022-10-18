// importando a lista de livros
const livros = require('./listaLivros');

// importando a função de menor valor
const menorValor = require('./menorValor');

// criando um lopping: laço de repetição para percorrer toda a lista e trocando de lugar os livros mais caros pelo mais barato
for (let atual = 0; atual < livros.length -1; atual++) {

  /* A primeira coisa que vamos fazer e verificar qual que e o menor valor da nossa lista começando com 0
     criando uma variavel para salvar o retorno da função que foi criada para pegar o menor valor
     executando a função menorValor passando para ela o primeiro parametro que e a lista de livros e a posição inicial que vai ser a atual
  */
  let menor = menorValor(livros, atual)

  // Agora precisamos trocar os valores de lugares para poder deixar a lista ordenada a partir do menor valor para o maior valor

  // guardando o valor do livro atual
  let livroAtual = livros[atual];
  console.log('posição atual', atual)
  console.log('livro atual', livros[atual])

  // guardando o valor dos livros com menor preço
  let livroMenorPreco = livros[menor];
  console.log('livro menor preço', livros[menor])

  // Com o valor do livro atual e do livro com menor preço guardado dentro da variavel. Agora vamos realizar a troca de lugares 
  livros[atual] = livroMenorPreco
  livros[menor] = livroAtual
}

console.log(livros) 