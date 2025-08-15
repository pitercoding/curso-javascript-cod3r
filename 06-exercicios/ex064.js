function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(contarPalavras("Sou uma frase")) //3
console.log(contarPalavras("Me divirto aprendendo a programar")) //5