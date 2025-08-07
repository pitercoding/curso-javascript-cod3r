// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

function conceituarNotas(notas) {
  return notas.map((nota) => {
    if (nota >= 0 && nota <= 4.9) return "D";
    if (nota >= 5 && nota <= 6.9) return "C";
    if (nota >= 7 && nota <= 8.9) return "B";
    if (nota >= 9 && nota <= 10) return "A";
    return "Nota inválida";
  });
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
let vetorConceitos = conceituarNotas(notas);

console.log(notas.join(", "));
console.log(vetorConceitos);
