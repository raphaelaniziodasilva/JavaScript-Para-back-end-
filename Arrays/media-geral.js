/* Desafio  media das trumas
    Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala 
*/
const salaJs = [7, 8, 8, 7, 3.5, 6.5, 4, 9, 10]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// como precisamos calcular a media de 3 salas diferentes vamos criar uma funçãooara fazer isso, precisamos usar um outro metodo que se chama reduce
// reduce --> o reduce ele vai trazer todo o array para um unico valor e vai nos retornar esse valor

//  
function mediaSala(notasSala){
    const somaDasNotas = notasSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas / notasSala.length
}

console.log(`Média da sala de ${mediaSala(salaJs)}`)
console.log(`Média da sala de ${mediaSala(salaJava)}`)
console.log(`Média da sala de ${mediaSala(salaPython)}`)


// fazendo a media das notas usando o metodo reduce
const notas = [10, 8, 7, 7]

// acum e atual são parametros que eu defini para poder fazer a soma do array
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media)
