// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let valor1 = 79;
let valor2 = 152;
let valor3 = 78;

if (valor1 > valor2 && valor1 > valor3) {
  console.log(valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
  console.log(valor2);
} else console.log(valor3);
