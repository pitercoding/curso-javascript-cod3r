// Object.preventExtensions 
// Modificar attrs: sim
// Criar novos attrs: Não
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //Ignorado
delete produto.tag
console.log(produto)

// Object.seal 
// Adicionar e excluir attrs: Não
// Modificar attrs: Sim
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //Ignorado
delete pessoa.nome //Ignorado
pessoa.idade = 29 
console.log(pessoa)

// Object.freeze = selado + valores constantes