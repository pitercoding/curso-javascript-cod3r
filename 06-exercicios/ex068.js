function inverter(obj) {
  const objInvertido = {};

  Object.entries(obj).forEach((parChaveValor) => {
    const chave = 0,
      valor = 1;
    objInvertido[parChaveValor[valor]] = parChaveValor[chave];
  });
  return objInvertido;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));



function inverter2(obj) {
  const paresDeChaveValorInvertidos = Object.entries(obj).map((parChaveValor) =>
    parChaveValor.reverse()
  );

  return Object.fromEntries(paresDeChaveValorInvertidos);
}

console.log(
  inverter2({ nome: "Camila", sobrenome: "De Lima", profissao: "Professora" })
);
