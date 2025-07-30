// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //b não declarado NaN
imprimirSoma(2, 10, 6, 7, 8, 9) //Soma a + b e ignora o resto
imprimirSoma() //NaN a e b não declarados

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())