const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; //Forma antiga
const obj2 = { a, b, c }; //Forma simplificada
console.log(obj1, obj2);

//Forma antiga
const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr 
console.log(obj3)

//Forma simplificada
const obj4 = {[nomeAttr] : valorAttr} 
console.log(obj4)

const obj5 = {
    funcao1: function() { //Forma antiga
        //...
    }, 
    funcao2() { //Forma simplificada
        //...
    }
}
console.log(obj5)