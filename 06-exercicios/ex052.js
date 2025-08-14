function removerPropriedade(objeto, nomeDaPropriedade) {
  const copia = { ...objeto };
  delete copia[nomeDaPropriedade];
  return copia;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(
  removerPropriedade(
    {
      id: 20,
      nome: "caneta",
      descricao: "Não informado",
    },
    "descricao"
  )
);
console.log(
  removerPropriedade(
    {
      nome: "Camila",
      sobrenome: "Justino de Lima",
      idade: 35,
      dinheiro: "muito",
    },
    "dinheiro"
  )
);
