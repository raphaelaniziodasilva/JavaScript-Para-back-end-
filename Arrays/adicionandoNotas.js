const notas = [6, 9, 3.5]
// adicionando a quarta nota no ultimo elemento do array ou seja a nota 8 vai ficar na posição 3
notas.push(8)

console.log(notas)

// pegando a posição dos elementos e somando
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length // length --> vai dizer o comprimento do array ou seja quantos elementos tem dentro do array

console.log(`A media do aluno é ${media}`)


// Deletndo elementos
const Notas = [6, 9, 3.5, 7, 2]

// removendo a ultima nota do array
Notas.pop()
console.log(Notas)



