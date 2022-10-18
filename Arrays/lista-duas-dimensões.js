/* Desafio Lista com duas dimensões
 Crie uma lista com os seguintes alunos
 Jõao, Juliana, Caio, Ana

 Crie uma lista com as seguintes medias 
 10, 8, 9.5, 6

 Cire uma lista com 2 dimensões com os nomes e as medias    
*/
const alunos = [ "Jõao", "Juliana", "Caio", "Ana"]
const media = [ 10, 8, 9.5, 6]

// criando a lista de duas dimensões 
let ListaDeAlunosEnotas = [alunos, media]

console.log(`${ListaDeAlunosEnotas[0][3]}, a sua nota e ${ListaDeAlunosEnotas[1][3]}`)