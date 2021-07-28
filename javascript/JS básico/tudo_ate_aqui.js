//Nome do aluno - nota1 - nota2 - media - aprovado ou reprovado

var nome = [
  'Matheus',
  'Igor',
  'Mariana',
  'Agatha',
  'Geovana',
  'Marcos',
  'Marina',
  'Renan',
  'Samela',
  'Bruna',
];
var notasA = [8.5, 6.9, 7.5, 8.0, 5.7, 6.3, 5.9, 4.9, 7.0, 9.0];
var notasB = [9.3, 5.7, 7.8, 5.3, 8.0, 7.3, 3.8, 6.2, 5.9, 6.4];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return 'Aprovado';
  } else {
    return 'Reprovado';
  }
}

for (var i in nome) {
  var nota1 = notasA[i];
  var nota2 = notasB[i];

  var m = media(nota1, nota2);

  console.log(
    nome[i] +
      ' - Nota 1: ' +
      nota1 +
      ' - Nota 2: ' +
      nota2 +
      ' Media: ' +
      media(nota1, nota2) +
      ' Foi: ' +
      passou(m)
  );
}
