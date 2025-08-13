function calcularSalarioLiquido(qtdHorasTrabalhadas, ganhoPorHora) {
    const salarioBruto = qtdHorasTrabalhadas * ganhoPorHora
    const imposto = salarioBruto * 30 / 100
    const salarioFinal = salarioBruto - imposto
    return `Salário igual a R$${salarioBruto}, retirando 30% de impostos ($R${imposto}), o funcionário receberá R$${salarioFinal}.`
}

console.log(calcularSalarioLiquido(180, 60))