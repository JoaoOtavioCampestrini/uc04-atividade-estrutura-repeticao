//  2. Utilizando(DoWhile), elaborar um programa que apresente
//  o somatório dos valores pares existentes na faixa de 1 até 500.


////////////////////// A T I V I D A D E 0 2 /////////////////////////////


let soma: number = 0;
let numero: number = 1;

do {
  if (numero % 2 === 0) { 
    soma += numero;       
  }
  numero++; 
} while (numero <= 500);

//resultado
console.log(`O somatório dos valores pares entre 1 e 500 é: ${soma}`);
