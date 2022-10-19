// No dia a dia do trabalho, é muito comum usarmos métodos nativos - ou seja, aqueles que já são próprios da linguagem e só precisam ser “chamados” como funções - para que nosso código fique mais legível ou então para simplificar o trabalho

// O método sort() molda elementos de um array em strings e os ordena em ordem crescente. Vamos ver um exemplo?

let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Observe que a saída mostra a classificação dos números um pouco diferente do esperado. Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem sequencial de acordo com sua posição na tabela ASCII, onde 20 vem antes de 3.

// Para que o sort() funcione de acordo com o esperado, precisamos passar os parâmetros de comparação de forma explícita:

var numbers = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
