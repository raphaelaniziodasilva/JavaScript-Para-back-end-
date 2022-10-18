/* Desafio Ponto extra
 Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas
 10, 9, 8, 6, 7
 Utilize o metodo map para realizar essa desafio
*/
const notas = [ 10, 9, 8, 6, 7]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota: ++ nota)

console.log(notasAtualizadas)

