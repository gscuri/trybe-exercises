// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;


for ( let n = 0; n < numbers.length; n += 1) { 
    somaNumbers += numbers[n];
}

let mediaNumbers = somaNumbers/numbers.length;

if ( mediaNumbers > 20) { 
    console.log( 'valor maior que 20')   
}
    else { 
        console.log( 'valor menor ou igual a 20')
    }
