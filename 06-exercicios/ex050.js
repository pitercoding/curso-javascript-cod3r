function simboloMais(quantidade){
    return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(2))
console.log(simboloMais(5))
console.log('--------------------------')

function simboloMais2(quantidade) {
    let resultado = ''
    for (let i = 0; i < quantidade; i++) {
        resultado += '+'        
    }
    return resultado
}

console.log(simboloMais2(2))
console.log(simboloMais2(5))