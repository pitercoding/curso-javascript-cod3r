// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function lerIntervaloDoVetor(vetorNumeros) {
  let qtdDentroDoIntervalo10a20 = 0;
  let qtdForaDoIntervalo10a20 = 0;
  let vetorDentro = [];
  let vetorFora = [];

  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] <= 20 && vetorNumeros[i] >= 10) {
      vetorDentro.push(vetorNumeros[i]);
      qtdDentroDoIntervalo10a20++;
    } else {
      vetorFora.push(vetorNumeros[i]);
      qtdForaDoIntervalo10a20++;
    }
  }
  console.log(
    `${qtdDentroDoIntervalo10a20} número(s) dentro do intervalo (10 a 20): ${vetorDentro.join(
      ", "
    )}`
  );
  console.log(
    `${qtdForaDoIntervalo10a20} número(s) fora do intervalo: ${vetorFora.join(
      ", "
    )}`
  );
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
lerIntervaloDoVetor(vetor1);

console.log();

let vetor2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
lerIntervaloDoVetor(vetor2);

console.log();

let vetor3 = [-1, -3, 5, 77, 89, 11, 21, 71, 29, 33, 100];
lerIntervaloDoVetor(vetor3);
