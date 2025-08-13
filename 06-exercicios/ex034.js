// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificacaoDeString(str1, str2) {
    const s1 = str1.toLowerCase()
    const s2 = str2.toLowerCase()

    for (let char of s1) {
        if (!s2.includes(char)) return false
    }

    for (let char of s2) {
        if (!s1.includes(char)) return false;
    }

    return true
}

console.log(verificacaoDeString('abcdf', 'dcba')) // false
console.log(verificacaoDeString('AbC', 'cBa'))    // true
console.log(verificacaoDeString('aabb', 'bbaa'))  // true
