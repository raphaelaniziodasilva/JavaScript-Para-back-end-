/* O splice é usado para adicionar e remover elementos de uma lista

Desafio Atualizando elementos
Crie uma lista de alunos aonde os alunos ana e caio mudaram de escola e o rodrigo entrou na escola. Agora atualize a sala
*/
const ListaDeChamadas = ["Jõao", "Juliana", "Ana", "Caio", "Lara", "Nildin", "Guilherme"]

// removendo os aulunos Ana e Caio da lista de chamada e adicionando o Rogerio
ListaDeChamadas.splice(2, 2, "Rogerio" )
console.log(`Lista de chamadas atualizadas: ${ListaDeChamadas}`)

const ListaDeAlunos = ["Jõao", "Juliana", "Ana", "Caio", "Lara", "Nildin", "Guilherme"]
// adicionando um novo aluno que vai ficar do lado da aluna Lara
ListaDeAlunos.splice(5, 0, "Goku")
console.log(`Lista de chamadas atualizadas: ${ListaDeAlunos}`)
