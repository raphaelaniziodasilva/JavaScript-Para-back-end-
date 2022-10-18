/* Desafio Filtrando por nota
 Depois de calcular a media dos alunos, precisamos mostrar quem esta reprovado entre os alunos
 "Ana", "Marco", "Maria", "Mauro"
  4, 7.5, 8, 5.5
  Vamos usar o metodo filter para filtrar por nota
*/
const nomes = ["Ana", "Marco", "Maria", "Mauro"]
const notas = [4, 7.5, 8, 5.5]

// vamos filtrar os alunos reprovados            pegando as notas e fazendo uma condição             
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 7)

console.log(reprovados)
