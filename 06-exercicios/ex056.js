function encontrarParesQueSomam(numeros, target) {
  const mapa = {}; // Guarda valor -> índice

  for (let i = 0; i < numeros.length; i++) {
    const complemento = target - numeros[i];

    // Se o complemento já foi visto, achamos o par
    if (mapa[complemento] !== undefined) {
      return [mapa[complemento], i];
    }
    // Guarda o número atual e seu índice
    mapa[numeros[i]] = i;
  }

  // Se não achar nenhum par
  return [];
}

console.log(encontrarParesQueSomam([2, 7, 11, 15], 9));
