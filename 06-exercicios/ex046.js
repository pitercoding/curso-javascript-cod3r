function inverso(valor) {
  const tipo = typeof valor

  if (tipo == "boolean") {
    return !valor
  } else if (tipo == "number") {
    return -valor
  } else {
    return `Tipo Boolean ou Number esperados. O tipo que informou é ${tipo}.`
  }
}

console.log(inverso(false));
console.log(inverso(true));
console.log(inverso(1));
console.log(inverso("Oi"));
