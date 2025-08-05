// Faça um algoritmo que calcule o fatorial de um número.

function calculaFatorial (n) {
    if (n === 0 || n === 1) {
        return 1
    }

    let resultado = 1
    for (let i = 2; i <= n; i++){
        resultado *= i
    }
    return resultado
}

console.log(calculaFatorial(5))