// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function lerParesEImpares(vetorNumeros) {
  let qtdPares = 0;
  let qtdImpar = 0;
  let vetorPar = [];
  let vetorImpar = [];

  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 === 0) {
      vetorPar.push(vetorNumeros[i]);
      qtdPares++;
    } else {
      vetorImpar.push(vetorNumeros[i]);
      qtdImpar++;
    }
  }

  console.log(`${qtdPares} número(s) par(es): ${vetorPar.join(", ")}`);
  console.log(`${qtdImpar} número(s) ímpar(es): ${vetorImpar.join(", ")}`);
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
lerParesEImpares(vetor1);

console.log();

let vetor2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
lerParesEImpares(vetor2);

console.log();

let vetor3 = [-1, -3, 5, 77, 89, 11, 21, 71, 29, 33, 100];
lerParesEImpares(vetor3);
