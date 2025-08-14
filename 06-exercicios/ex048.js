function multiplicar(numero, multiplicador) {
  if (multiplicador < 0) return -multiplicar(numero, -multiplicador);

  let resultado = 0;
  while (multiplicador--) resultado += numero;

  return resultado;
}

console.log(multiplicar(5, 5)); // 25
console.log(multiplicar(0, 7)); // 0
console.log(multiplicar(-1, 2)); // -2
console.log(multiplicar(3, -4)); // -12
