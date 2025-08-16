/*
O comparador numB - numA coloca os maiores primeiro (ordem decrescente).
*/

function segundoMaior(numeros){
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const resultado = numerosOrdenados[1]
    return resultado
}

console.log(segundoMaior([38, 2, 365, 10, 125, 11])); //125
console.log(segundoMaior([5, 9, 1, 125, 11])); //11