function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

function despesasTotais2(itens) {
    let total = 0
    for(let item of itens) {
        total += item.preco
    }
    return total
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entreterimento", preco: 150},
])) //239.99

console.log(despesasTotais2([
    {nome: "Galaxy 520", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90},
])) //34599.89