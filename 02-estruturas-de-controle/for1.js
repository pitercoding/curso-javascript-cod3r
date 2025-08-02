console.log('WHILE:')
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
console.log('FIM!')

console.log()

console.log('FOR:')
for (let index = 0; index <= 10; index++) {
    console.log(`index = ${index}`)
}
console.log('FIM!')

console.log()

console.log('FOR percorrendo ARRAY:')
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)    
}
console.log('FIM!')
