function calcMedia(n1, n2){
  return (this.nota[0] + this.nota[1]) / 2
}

var aluno = {
  nome: 'Matheus',
  nota: [10, 5],

  media: calcMedia
};


var aluno1 = {
    nome: 'Mariana',
    nota: [7, 6],
  
    media: calcMedia
  }


console.log(aluno.nome);
console.log(aluno.media());


console.log(aluno1.nome);
console.log(aluno1.media());
