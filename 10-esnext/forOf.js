for (let letra of 'Cod3r') { /* letras */
    console.log(letra)
}

console.log('----------------------')

const assustosEcma = ['Map', 'Set', 'Promise']

for (let i in assustosEcma) { /* índices */
    console.log(i)
}

for (let assunto of assustosEcma) { /* valores */
    console.log(assunto)
}

console.log('----------------------')

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap) { /* array chave/valor */
    console.log(assunto)
}

for(let chave of assuntosMap.keys()) { /* chaves */
    console.log(chave)
}

for(let valor of assuntosMap.values()) { /* valores */
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { /* array destructuring chave/valor */
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) { /* percorrer um Set */
    console.log(letra)
}
