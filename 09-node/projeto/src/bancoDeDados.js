const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

// Salva o produto. Se não tem id, cria um
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// Retorna produto pelo id
function getProduto(id) {
    return produtos[id] || {}
}

// Retorna todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }