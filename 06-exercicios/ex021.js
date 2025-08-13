// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130

function mensalidade(idade) {
  if (idade < 0 || idade > 120) {
    console.log("Idade inválida!");
    return;
  }

  let adicional;

  if (idade < 10) {
    adicional = 80;
  } else if (idade <= 30) {
    adicional = 50;
  } else if (idade <= 60) {
    adicional = 95;
  } else {
    adicional = 130;
  }

  const valorTotal = 100 + adicional;
  console.log(`A mensalidade custa R$${valorTotal}.`);
}

mensalidade(-1);
mensalidade(0);
mensalidade(10);
mensalidade(30);
mensalidade(31);
mensalidade(60);
mensalidade(61);
mensalidade(90);
mensalidade(120);
mensalidade(121);
