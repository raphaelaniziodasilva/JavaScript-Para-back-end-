/* Estrutura do reduce()
 o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros
*/
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

/* O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.

A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.

A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.

Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:

*/

const somas = numeros.reduce(function (acum, atual) {
    return atual + acum
}, 0)
/* Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): O primeiro parâmetro, uma função e o segundo, um número. */

// Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
}   
const Soma = numeros.reduce(operacaoNumerica, 0)

// O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

// É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem.





