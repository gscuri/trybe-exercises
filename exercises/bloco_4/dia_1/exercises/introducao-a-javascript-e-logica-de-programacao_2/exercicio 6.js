// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let eImpar = [];
for (let aux = 0; aux < numbers.length; aux += 1) {
  if (numbers[aux] % 2 != 0) {
    eImpar.push = numbers[aux];
  } else {
    console.log("nenhum valor impar encontrado");
  }
  
}
  console.log(" os valores são:" + eImpar.length);
  console.log(eImpar);