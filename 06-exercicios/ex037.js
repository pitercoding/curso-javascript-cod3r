// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos. Fórmula: a_n = a1 + (n - 1) * r / a_n = a1 * r^(n - 1)

// Função para Progressão Aritmética
function gerarPA(n, a1, r) {
  let termos = [];
  let soma = 0;

  for (let i = 0; i < n; i++) {
    let termo = a1 + i * r;
    termos.push(termo);
    soma += termo;
  }

  console.log("Progressão Aritmética:");
  console.log("Termos: ", termos.join(", "));
  console.log("Soma: ", soma);
  console.log();
}

// Função para Progressão Geométrica
function gerarPG(n, a1, r) {
  let termos = [];
  let soma = 0;

  for (let i = 0; i < n; i++) {
    let termo = a1 * Math.pow(r, i);
    termos.push(termo);
    soma += termo;
  }
  console.log("Progressão Geométrica:");
  console.log("Termos: ", termos.join(", "));
  console.log("Soma: ", soma);
  console.log();
}

gerarPA(5, 2, 3); // 5 termos, primeiro termo = 2, razão = 3
gerarPG(5, 2, 3); // 5 termos, primeiro termo = 2, razão = 3
