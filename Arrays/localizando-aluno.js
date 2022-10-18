/* Desafio Procurando na lista
- Crie uma função que recebe como argumento o nome do aluno
- Verifique se o aluno esta presente na lista e retorne a media final que se encontra no mesmo indice
- Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado  
*/
const alunos = [ "Jõao", "Juliana", "Caio", "Ana"]
const media = [ 10, 8, 9.5, 6]

// criando a lista de duas dimensões 
let ListaDeAlunosEnotas = [alunos, media]

// criando função para exibir nome e nota e ela vai precisar receber nome do aluno
const exibirNomeNota = (NomeDoAluno) => {

    // vamos verificar se o aluno existi 
    if(ListaDeAlunosEnotas[0].includes(NomeDoAluno)) {

        // se o aluno estiver cadastrado vamos buscar pelo indice dento da lista de alunos e notas 
        let indice = ListaDeAlunosEnotas[0].indexOf(NomeDoAluno)

        //  retornando o nome do aluno e a media
        return ListaDeAlunosEnotas[0][indice] + ", sua media é " + ListaDeAlunosEnotas[1][indice]
    } else {
        return "Aluno(a) não esta cadastrado"
    }
}
console.log(exibirNomeNota("Caio"))