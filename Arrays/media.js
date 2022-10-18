// media = 10, 9, 8, 7, 6, 5...

// let nota1 = 5
// let nota2 = 5
// let nota3 = 4
// let nota4 = 9

// let media = (nota1 + nota2 + nota3 +nota4)/4

// console.log(media)

//   índice =  0, 1, 2,   3
const notas = [9, 5, 6.5, 8]

// pegando a posição dos elementos e somando
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length // length --> vai dizer o comprimento do array ou seja quantos elementos tem dentro do array

console.log(`A media do aluno é ${media}`)