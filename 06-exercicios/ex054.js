function objetoParaArray(objeto) {
  return Object.entries(objeto);
}

console.log(
  objetoParaArray({
    nome: "Ana",
    sobrenome: "Gomes",
    idade: 22,
    profissao: "Enfermeira",
    estadoCivil: "Solteira",
    dependentes: false,
  })
);

console.log("---------------------");

function objetoParaArray2(objeto) {
  const resultado = [];
  for (let chave in objeto) {
    resultado.push([chave, objeto[chave]]);
  }
  return resultado;
}

console.log(
  objetoParaArray2({
    nome: "Ana",
    sobrenome: "Gomes",
    idade: 22,
    profissao: "Enfermeira",
    estadoCivil: "Solteira",
    dependentes: false,
  })
);
