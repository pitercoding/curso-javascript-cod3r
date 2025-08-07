// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos. Fórmula: a_n = a1 + (n - 1) * r / a_n = a1 * r^(n - 1)

function gerarPA(a1, r, n) {
  let pa = [];
  for (let i = 0; i < n; i++) {
    pa.push(a1 + i * r);
  }
  return pa;
}

function gerarPG(a1, r, n) {
  let pg = [];
  for (let i = 0; i < n; i++) {
    pg.push(a1 * Math.pow(r, i));
  }
  return pg;
}

console.log(gerarPA(2, 3, 5)); // [2, 5, 8, 11, 14]
console.log(gerarPG(2, 3, 5)); // [2, 6, 18, 54, 162]
