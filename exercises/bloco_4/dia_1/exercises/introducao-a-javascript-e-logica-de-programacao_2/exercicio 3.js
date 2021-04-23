// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;


for ( let n = 0; n < numbers.length; n += 1) { 
    somaNumbers += numbers[n]
}

console.log( somaNumbers/numbers.length)