// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function identificadorDeNumerosNegativos (vetor) {
    let qtdnumerosNegativos = 0
    let vetorNegativo = []

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            vetorNegativo.push(vetor[i])
            qtdnumerosNegativos++
        }
    }
    
    if (qtdnumerosNegativos === 0) {
        console.log(`${qtdnumerosNegativos} números negativos.`)
    } else {
        console.log(`${qtdnumerosNegativos} números negativos: ${vetorNegativo.join(", " )}`)
    }
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
identificadorDeNumerosNegativos(vetor1)

console.log();

let vetor2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
identificadorDeNumerosNegativos(vetor2)

console.log();

let vetor3 = [-1, -3, 5, 77, 89, 11, 21, 71, 29, 33, 100];
identificadorDeNumerosNegativos(vetor3)

console.log();

let vetor4 = [];
identificadorDeNumerosNegativos(vetor4)