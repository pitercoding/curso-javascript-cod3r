function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29
}

console.log(checarAnoBissexto(2020)) //true
console.log(checarAnoBissexto(2100)) //false. múltiplo de 100 mas não de 400

function checarAnoBissexto2(ano) {
    const divisivelporQuatro = ano % 4 == 0
    const divisivelporCem = ano % 100 == 0
    const divisivelporQuatrocentos = ano % 400 == 0

    return (divisivelporQuatro && !divisivelporCem) || divisivelporQuatrocentos
}

console.log('======================================')
console.log(checarAnoBissexto2(2020)) //true
console.log(checarAnoBissexto2(2100)) //false. múltiplo de 100 mas não de 400