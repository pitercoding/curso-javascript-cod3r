// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function divisivelPor3(n) {
    if (n % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(2))
console.log(divisivelPor3(150))