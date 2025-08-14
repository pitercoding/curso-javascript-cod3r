function repetir(valor, repeticoes) {
  let resultado = [];
  for (let i = 0; i < repeticoes; i++) {
    resultado.push(valor);
  }
  return resultado;
}

console.log(repetir(1, 5));
console.log(repetir("oi", 3));
console.log(repetir(true, 6));
console.log(repetir(2.1, 4));
console.log("-----------------");

function repetir2(item, quantidade) {
  return Array(quantidade).fill(item);
}

console.log(repetir(1, 5));
console.log(repetir("oi", 3));
console.log(repetir(true, 6));
console.log(repetir(2.1, 4));
