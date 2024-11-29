//  5. Escrever um programa que apresente os valores da sequência numérica
//   de Fibonacci até o décimo quinto termo.A sequência de Fibonacci é
//  formada pelos valores numéricos 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
//  ...etc., obtendo - se o próximo termo a partir da soma do termo atual com 
//  o anterior sucessivamente até o infinito se a sequência não for interrompida,
//  sendo determinada a partir da fórmula fórmula Fn = Fn - 1 + Fn - 2. Utilize
//  para este exercício as variáveis ATUAL, ANTERIOR e PRÓXIMO.


////////////////////// A T I V I D A D E 0 5 /////////////////////////////


let anterior: number = 0; 
let atual: number = 1;    
let proximo: number;      

console.log(`Termo 1: ${anterior}`);
console.log(`Termo 2: ${atual}`);

for (let i: number = 3; i <= 15; i++) {
  proximo = anterior + atual; 
  console.log(`Termo ${i}: ${proximo}`);
  
  anterior = atual;
  atual = proximo;
}
