function receberSomenteOsParesDeIndicesPares(numeros) {
  return numeros.filter((numero, indice) => {
    const numPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;

    return numPar && indicePar;
  });
}

console.log(
  receberSomenteOsParesDeIndicesPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
