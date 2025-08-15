function calcularMedia(...numeros) {
  const qtdNumeros = numeros.length;
  let somaTotal = 0;

  for (let n of numeros) {
    somaTotal += n;
  }
  return somaTotal / qtdNumeros;
}

console.log(calcularMedia(0, 10)); //5
console.log(calcularMedia(1, 2, 3, 4, 5)); //3
