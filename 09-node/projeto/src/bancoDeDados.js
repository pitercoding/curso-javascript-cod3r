const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

// POST. Se não tem id, cria um
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// GET produto pelo id
function getProduto(id) {
    return produtos[id] || {}
}

// GET todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

// DELETE
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }