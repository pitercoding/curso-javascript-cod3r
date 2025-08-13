// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
// A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade (mes, valorDaAnuidade) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valorDaAnuidade * ((1 + (5/100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(anuidade(4, 100))
console.log(anuidade(0, 100))
console.log(anuidade(13, 100))
console.log(anuidade(12, 100))