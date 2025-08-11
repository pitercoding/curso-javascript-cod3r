const obj = { a:1, b:2, c:3, soma() { return a + b + c}}
console.log(JSON.stringify(obj)) // objeto para JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //JSON para obj
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) //JSON para obj
