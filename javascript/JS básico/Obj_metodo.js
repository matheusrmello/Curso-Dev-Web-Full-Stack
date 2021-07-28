var aluno = {
  nome: 'Matheus',
  nota: [10, 5],

  media: function (n1, n2) {
    return (n1 + n2) / 2;
  },
};


var aluno1 = {
    nome: 'Mariana',
    nota: [7, 6],
  
    media: function (n1, n2) {
      return (n1 + n2) / 2;
    },
  };

console.log(aluno.nome);
console.log(aluno.media(aluno.nota[0], aluno.nota[1]));


console.log(aluno1.nome);
console.log(aluno1.media(aluno1.nota[0], aluno1.nota[1]));

