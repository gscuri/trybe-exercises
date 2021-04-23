// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (let aux = 0; aux < numbers.length; aux += 1) {
  if (numbers[aux] > maiorValor) {
    maiorValor = numbers[aux];
  }
}

console.log(maiorValor);
