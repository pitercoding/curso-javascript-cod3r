function removerVogais(frase) {
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    vogais.forEach(vogal => frase = frase.replace(new RegExp(vogal, "g"), ""));

    return frase
}

console.log(removerVogais("Precipicio"))
console.log(removerVogais("Fundamentos"))



function removerVogais2(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais2("Precipicio"))
console.log(removerVogais2("Fundamentos"))