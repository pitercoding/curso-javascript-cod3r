function somarNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

console.log(somarNumeros([10, 10, 20, 10]))
console.log(somarNumeros([0, 0, 0, 0, 1]))
console.log(somarNumeros([-10, -10, 20, 10]))

function somarNumeros2(numeros) {
    let soma = 0
    numeros.forEach(element => soma += element);
    return soma
}
console.log('===================================')
console.log(somarNumeros2([10, 10, 20, 10]))
console.log(somarNumeros2([0, 0, 0, 0, 1]))
console.log(somarNumeros2([-10, -10, 20, 10]))