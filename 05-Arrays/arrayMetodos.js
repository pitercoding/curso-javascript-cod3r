const pilotos = ['Vertel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o último
console.log(pilotos)

pilotos.push('Verstappen') //Adiciono no fim
console.log(pilotos)

pilotos.shift() //Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no início
console.log(pilotos)

//Splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa') //Splice Add
console.log(pilotos)
pilotos.splice(3, 1) //Splice Remover
console.log(pilotos)

// Slice - novo array - apartir do índice 2
const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

// Slice - novo array - Imprime índice 1 ao 3
const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)
