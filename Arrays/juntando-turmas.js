/* Desafio Juntando salas
 Haverá uma palestra sobre padrões de projetos para as alunas das salas de Javascript e Python.
 Junte ambas as salas em uma unica lista que exiba toda as alunas
*/
const salaJavascript = ["Nildin", "Goku", "Haland"]
const salaPython = ["Vedita", "Tiago", "Robert", "Cr7"]

// concat --> fazendo a concatenação dos dois arrays para poder juntar as salas em uma unica sala com todas as alunas
const salasJuntas = salaJavascript.concat(salaPython)

console.log(salasJuntas)