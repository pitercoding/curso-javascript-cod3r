function contarCaractere(caractereBuscado, frase) {
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === caractereBuscado) {
      contador++;
    }
  }
  return `A letra ${caractereBuscado} apareceu ${contador} vez(es).`;
}

console.log(contarCaractere("r", "A sorte favore os audazes")); //2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")); //1
console.log(contarCaractere("w", "Curto muito aprender a programar")); //0

function contarCaractere2(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

console.log("=================================================");
console.log(contarCaractere2("r", "A sorte favore os audazes")); //2
console.log(contarCaractere2("c", "Conhece-te a ti mesmo")); //1
console.log(contarCaractere2("w", "Curto muito aprender a programar")); //0
