function cumprimentar(str1) {
    console.log(`Olá, ${str1}!`) 
}

cumprimentar("Leonardo")
cumprimentar("Maria")

function cumprimentar2(str2) {
    const saudacao = "Olá"
    return [saudacao, str2].join(', ').concat("!")
}

console.log(cumprimentar2("Daniel")) 
console.log(cumprimentar2("Ana"))

function cumprimentar3(str3) {
    return "Olá, " + str3 + "!"
}

console.log(cumprimentar3("João")) 
console.log(cumprimentar3("Carla"))