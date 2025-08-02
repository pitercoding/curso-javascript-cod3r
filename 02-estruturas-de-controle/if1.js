function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

//undefined false -> boolean em ação
seForVerdadeEuFalo() 
seForVerdadeEuFalo(undefined) 

//false -> boolean em ação
seForVerdadeEuFalo(null) 
seForVerdadeEuFalo(NaN) 
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

//true
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
