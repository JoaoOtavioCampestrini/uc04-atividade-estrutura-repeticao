//  6. Elaborar um programa que apresente os valores de conversão de graus
//  Celsius em graus Fahrenheit, de dez em dez graus, iniciando a contagem
//  em dez graus Celsius e finalizando em cem graus Celsius.O programa deve
//  apresentar os valores das duas temperaturas.Para converter grau Celsius
//  para Fahrenheit, basta multiplicar a temperatura em graus Celsius por
//  1, 8 e somar 32.


////////////////////// A T I V I D A D E 0 6 /////////////////////////////


function celsiusParaFahrenheit(celsius: number): number {
    return celsius * 1.8 + 32;
  }
  
  
  for (let celsius: number = 10; celsius <= 100; celsius += 10) {
    const fahrenheit: number = celsiusParaFahrenheit(celsius);
    console.log(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
  }
  