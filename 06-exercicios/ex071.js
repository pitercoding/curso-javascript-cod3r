const soma = (array) =>
  array.reduce((acumulador, atual) => acumulador + atual, 0);

const media = (array) => array.length ? soma(array) / array.length : 0; //Garante que um aluno com nenhuma nota não quebre o código

function receberMelhorEstudante(estudantes) {
  return Object.entries(estudantes).reduce((melhor, [nome, notas]) => {
    const mediaAtual = media(notas);

    if (!melhor || mediaAtual > melhor.media) {
      return { nome, media: mediaAtual };
    }
    return melhor;
  }, null);
}


console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], //média 7.625
    Mariana: [9, 6.6, 7.9, 8], //média 7.875
    Carla: [7, 7, 8, 9], //média 7.75
  })
); // resultado: { nome: "Mariana", media: 7.875}
