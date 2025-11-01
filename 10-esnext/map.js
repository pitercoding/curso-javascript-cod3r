const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias)
console.log(tecnologias.react) // undefined -> não funciona assim
console.log(tecnologias.get('react').framework) // chamar assim

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //true
chavesVariadas.delete(123) 
console.log(chavesVariadas.has(123)) //false
console.log(chavesVariadas.size) // n de elementos do map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // não aceita chave duplicada. Sobrescreve o valor para 'b'
chavesVariadas.set(456, 'b') // Aceita valor duplicado
console.log(chavesVariadas)