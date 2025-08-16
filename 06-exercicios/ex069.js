function filterPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  let resultado = [];
  for (numero of numeros) {
    const qtdDigitos = String(numero).length;
    if (qtdDigitos === quantidadeDesejada) {
      resultado.push(numero);
    }
  }
  return resultado;
}

console.log(filterPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)); //[38, 10, 11]
console.log(filterPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)); //[5,9,1]




function filterPorQuantidadeDeDigitos2(numeros, quantidadeDesejada) {
  return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length
    return quantidadeDeDigitos === quantidadeDesejada
  })
}

console.log(filterPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2)); //[38, 10, 11]
console.log(filterPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1)); //[5,9,1]
