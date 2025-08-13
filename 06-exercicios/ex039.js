// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

function trocaValores(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        console.log('Vetores de tamanhos diferentes.')
        return
    }

    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }

    console.log('Novo vetor A:', vetorA)
    console.log('Novo vetor B:', vetorB)
}



let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]
trocaValores(vetorA, vetorB)