function filtrarNumeros1(array) {
  const resultado = [];
  for (let item of array) {
    if (typeof item === "number") {
      resultado.push(item);
    }
  }
  return resultado;
}

console.log(filtrarNumeros1(["a", 1, true, "oi", -5]));
console.log("---------------------------------------");

function filtrarNumeros2(array) {
  return array.filter((item) => typeof item === "number");
}
console.log(filtrarNumeros2(["a", 1, true, "oi", -5]));
