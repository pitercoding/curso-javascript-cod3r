// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imprimirNumerosImpares(inicio = 0, fim = 100) {
  if (inicio > fim) [inicio, fim] = [fim, inicio];

  if (inicio % 2 === 0) inicio++; // garante que começa em ímpar

  for (let i = inicio; i <= fim; i += 2) {
    console.log(i);
  }
}

imprimirNumerosImpares();
console.log();
imprimirNumerosImpares(50, 60);
console.log();
imprimirNumerosImpares(19, 3);
