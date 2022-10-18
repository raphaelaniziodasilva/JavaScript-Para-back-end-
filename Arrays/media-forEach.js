/* Desafio Média com ForEach
 Calcular a média entre os seguintes notas usando ForEach
 10, 5, 8, 6.5
 O ForEach e um jeito diferente que temos de passar por cada elemento que tem dentro do nosso array 
 ForEach significa para cada
*/
// array das notas
const notas = [10, 5, 8, 6.5]

// a variavel que vai receber as soma de todas as notas
let somaDasNotas = 0

// usando a estrutura forEach para passar por cada elemento do array e fazer a soma de todo o array de notas
notas.forEach(nota => {  // função callback
    somaDasNotas += nota
})

// fazendo a media das notas
let media = somaDasNotas / notas.length

console.log(media)
