const escola = "cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //Vazio. Não gera erro
console.log(escola.charCodeAt(3)); //Tabela unicode
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); //Índice informado até o fim
console.log(escola.substring(0, 3)); //Índice 0 ao 2
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e'));

console.log('Camila, Sarah, Rebeca'.split(','));