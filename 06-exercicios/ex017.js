// Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
//  Plano Aumento
//    A    10%
//    B    15%
//    C    20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.
// Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularReajuste(plano, salarioAtual) {
  switch (plano.toUpperCase()) {
    case "A":
      return salarioAtual + salarioAtual * 0.1;
    case "B":
      return salarioAtual + salarioAtual * 0.15;
    case "C":
      return salarioAtual + salarioAtual * 0.2;
    default:
      return "Plano inválido!";
  }
}

console.log(calcularReajuste("A", 1000)); // 1100
console.log(calcularReajuste("b", 1000)); // 1150
console.log(calcularReajuste("C", 1000)); // 1200
console.log(calcularReajuste("D", 1000)); // Plano inválido!
