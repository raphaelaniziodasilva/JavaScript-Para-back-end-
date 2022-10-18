/* Desafio sala dividida
Divida os alunos em duas salas com a mesma quantidade de alunos 
*/
const alunos = ["Jõao", "Juliana", "Raphael", "Caio", "Lara",
                "Nildin", "Guilherme", "Aline", "Fabiana", "Andre"]
const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2 ${sala2}`)
