function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([1,2,3,4,5,6,7]))
console.log(receberPrimeiroEUltimoElemento(["a", 2, 4, true]))