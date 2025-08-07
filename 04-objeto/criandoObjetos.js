// 1. Usando notação literal
const obj1 = {}
console.log(obj1)

// 2. Usando new Object()
const obj2 = new Object()
console.log(obj2)

// 3. Usando Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //this fica publico
    this.getPrecoComDesconto = () => {
       return preco * (1 - desc) 
    }
}
const p1 = new Produto('Cadeira', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome, p1.getPrecoComDesconto())
console.log(p2.nome, p2.getPrecoComDesconto())

// 4. Usando Função Factory:
function criandoFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criandoFuncionario('João', 7980, 4)
const f2 = criandoFuncionario('Maria', 11400, 1)
console.log(`Salário de ${f1.nome}:`, f1.getSalario())
console.log(`Salário de ${f2.nome}:`, f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Usando Função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)