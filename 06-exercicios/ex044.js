function nomeDoMes(numero) {
    if (numero <= 0 || numero >= 13) {
        return 'Mês inválido. Informe um mês de 1 a 12.'
    }

    switch (numero) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}

console.log(nomeDoMes(-1))
console.log(nomeDoMes(0))
console.log(nomeDoMes(1))
console.log(nomeDoMes(6))
console.log(nomeDoMes(12))
console.log(nomeDoMes(13))