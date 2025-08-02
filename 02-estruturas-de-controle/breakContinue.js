const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('BREAK: ')
for (let i in nums) { //Ao chegar no índice 5 sai do loop
    if (i == 5) {
        break
    }
    console.log(`${i} = ${nums[i]}`)   
}
console.log('Fim!')

console.log()

console.log('CONTINUE: ')
for (let y in nums) { //Pula o índice 5
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('Fim!')

console.log()

console.log('BREAK EXTERNO: ')
externo: for(a in nums) { //Não usar
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')