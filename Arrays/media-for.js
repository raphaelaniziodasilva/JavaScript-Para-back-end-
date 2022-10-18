/* Desafio Média
 Calcular a média entre os seguintes notas usando for
 10, 5, 8, 6.5
*/
// array das notas
const notas = [10, 6.5, 8, 7.5]

// a variavel que vai receber as soma de todas as notas
let somaDasNotas = 0

// usando a estrutura for para fazer a soma de todo o array de notas
for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}
// fazendo a media das notas
let media = somaDasNotas / notas.length

console.log(media)  


// Fazendo o Loops em matrizes


const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media1 = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media1 += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media1)