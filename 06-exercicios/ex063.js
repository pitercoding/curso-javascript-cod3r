function funcaoDaSorte(palpite) {
    const min = 1
    const max = 10
    const numAleatorio = Math.floor(Math.random() * (max - min +1) + min)

    return (palpite === numAleatorio ?
        `Parabéns! o número sorteado foi ${numAleatorio}!` :
        `Que pena! O número sorteado foi ${numAleatorio}.`
    )
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(1))