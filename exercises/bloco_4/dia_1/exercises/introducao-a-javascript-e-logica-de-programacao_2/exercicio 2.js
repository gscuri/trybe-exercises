// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for ( let n = 0; n < numbers.length; n += 1) { 
    somaNumbers += numbers[n]
}

console.log( somaNumbers)
