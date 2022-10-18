// importano a lista de livros aonde contém os livros com os preços
const livros = require("./listaLivros")

// agora precisamos guardar em uma variavel o valor mais barato e o valor atual da lista de livros
let maisBarato = 0 // 0 vai se comparar a posição 0 do array ou seja

// temos que percorrer toda a lista de livros e pegar o menor valor o livro que esta mais barato 

// Vamos trabalhar com loops, laços de repetição para poder fazer percorrer por cada elemento dentro do array 

for(let atual = 0; atual < livros.length; atual ++ ) {

    // se o livro atual for menor ele vai se tornar o mais barato e vai ser guardado dentro da variavel maisBarato
    if(livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}
console.log(`O livro mais barato custa R$: ${livros[maisBarato].preco} é o seu título e ${livros[maisBarato].titulo}`)
