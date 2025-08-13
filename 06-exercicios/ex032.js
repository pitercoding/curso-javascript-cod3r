// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMediaAritmetica(vetorValores) {
  let soma = 0;

  for (let i = 0; i < vetorValores.length; i++) {
    soma += vetorValores[i];
  }

  let media = soma / vetorValores.length;

  return media.toFixed(2);
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calcularMediaAritmetica(vetor1));

console.log();

let vetor2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(calcularMediaAritmetica(vetor2));

console.log();

let vetor3 = [-1, -3, 5, 77, 89, 11, 21, 71, 29, 33, 100];
console.log(calcularMediaAritmetica(vetor3));

console.log();

let vetor4 = [8, 9, 6];
console.log(calcularMediaAritmetica(vetor4));
