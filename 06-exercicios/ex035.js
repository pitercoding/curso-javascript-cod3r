// Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.

let pilhaOriginal = [1, 2, 3, 4, 5]; // vetorPilha
let elementosParaAdicionar = [6, 7, 8, 9, 10]; // vetorAdiciona

function adicionarElementosNaPilha(pilha, novosElementos) {
    for (let i = 0; i < novosElementos.length; i++) {
        console.log(`Adicionando: ${novosElementos[i]}`);
        pilha.push(novosElementos[i]);
    }
    console.log('Elementos adicionados: ' + novosElementos);
    console.log('Pilha final: ' + pilha);
}

adicionarElementosNaPilha(pilhaOriginal, elementosParaAdicionar);
