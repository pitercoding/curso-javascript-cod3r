let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log('Os verdadeiros:');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!"texto");
console.log(!![]);
console.log(!!{}); //objeto
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Pra finalizar: ');
console.log(!!('' || null || 0 || ' ')); // ' ' retorna V

let nome = 'Lucas';
console.log(nome || 'Desconhecido');
nome = '';
console.log(nome || 'Desconhecido');