function conversorDeIdade(idade) {
  const DIAS_POR_ANO = 365;

  if (idade < 0 || idade > 120) {
    return "Informe uma idade válida!";
  }

  const anosEmDias = idade * DIAS_POR_ANO;

  if (idade === 0) {
    return `Você tem ${idade} anos, ou seja, menos de ${DIAS_POR_ANO} dias.`;
  }

  return `Você tem ${idade} ano(s), o que equivale a ${anosEmDias} dias.`;
}

// Exemplo de uso
console.log(conversorDeIdade(0));
console.log(conversorDeIdade(1));
console.log(conversorDeIdade(30));
console.log(conversorDeIdade(120));
console.log(conversorDeIdade(121));

