// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

let numeros = [1, 2, 3, 4, 5, 6, 7];

function multiplicarTodos(numeros, multiplicador) {
    let resultado = [];
    numeros.forEach(numero => {
        resultado.push(numero * multiplicador);
    });
    return resultado;
}

function multiplicarSeMaiorQueCinco(numeros, multiplicador) {
    let resultado = [];
    numeros.forEach(numero => {
        if (numero > 5) {
            resultado.push(numero * multiplicador);
        }
    });
    return resultado;
}

// Testes:
console.log(multiplicarTodos(numeros, 2)); // [2, 4, 6, 8, 10, 12, 14]
console.log(multiplicarSeMaiorQueCinco(numeros, 2)); // [12, 14]
