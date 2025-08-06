// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function menorEMaior(vetorInteiros) {
    let menor 
    let maior

    for (let i = 0; i < vetorInteiros.length; i++) {
        if (menor === undefined && maior === undefined) {
            menor = vetorInteiros[i]
            maior = vetorInteiros[i]
        } else {
            if (vetorInteiros[i] < menor) {
                menor = vetorInteiros[i]
            }
            if (vetorInteiros[i] > maior) {
                maior = vetorInteiros[i]
            }
        } 
    }
    return [menor, maior]
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(menorEMaior(vetor1))

console.log();

let vetor2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(menorEMaior(vetor2))

console.log();

let vetor3 = [-1, -3, 5, 77, 89, 11, 21, 71, 29, 33, 100];
console.log(menorEMaior(vetor3))

console.log();

let vetor4 = [];
console.log(menorEMaior(vetor4))

