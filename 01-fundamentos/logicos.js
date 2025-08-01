function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2 //Outra forma de fazer XOR
    const manterSaudavel = !comprarSorvete //operador unário

    //Omitindo chave e passando só valor na criação do obj
    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log()
console.log(compras(true, false))
console.log()
console.log(compras(false, true))
console.log()
console.log(compras(false, true))