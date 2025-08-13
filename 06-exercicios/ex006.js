// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log(`Juros Simples = ${capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)}`)
}

function jurosComposto (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log(`Juros Composto = ${capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao}`)
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)