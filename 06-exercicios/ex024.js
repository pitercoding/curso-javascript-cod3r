// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function helloWorld() {
  let contador = 0;
  while (contador < 11) {
    console.log(`${contador + 1}º Hello World!`);
    contador++;
  }
}

helloWorld();
