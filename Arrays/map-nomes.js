/* Desafio Padronizando os nomes
  Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas 
  ["ana Julia", "Caio vinicius", "BIa silva"]
*/
const nomes = ["ana Julia", "Caio vinicius", "BIa silva"]

// função para deixar os nomes todos com letras maiusculas
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase())

console.log(nomesMaiusculos)


// Deixando os nomes dotos com letras minúsculas
const Nomes = ["ana Julia", "Caio vinicius", "BIa silva"]

// função para deixar os nomes todos com letras minúsculas
const nomesMinusculos = Nomes.map(nome => nome.toLowerCase())

console.log(nomesMinusculos)




