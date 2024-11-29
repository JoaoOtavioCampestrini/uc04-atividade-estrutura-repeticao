//  1. Utilizando(While), construir um programa que apresente 
//  a soma dos cem primeiros números naturais (1 + 2 + 3 +...+ 98 + 99 + 100).


////////////////////// A T I V I D A D E 0 1 /////////////////////////////

let soma: number = 0;
let contador: number = 1;

while (contador <= 100) {
  soma += contador; 
  contador++;       
}

console.log(`A soma dos cem primeiros números naturais é: ${soma}`);