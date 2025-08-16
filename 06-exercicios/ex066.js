function buscarPalavrasSemelhantes(inicio, array) {
    const resultado = []

    for(let palavra of array) {
        if(palavra.includes(inicio)) {
            resultado.push(palavra)
        }
    }
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("lis", ["listagem", "liquidificador", "listo", "liso"]))



function buscarPalavrasSemelhantes2(inicio, array) {
    return array.filter(palavra => palavra.includes(inicio))
}
console.log("================================================")
console.log(buscarPalavrasSemelhantes2("ap", ["apicultor", "apelido", "rogerio", "aprazível"]))
console.log(buscarPalavrasSemelhantes2("car", ["carro", "caricia", "caro", "caqui"]))