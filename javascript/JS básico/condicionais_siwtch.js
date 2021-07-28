var nota2 = 8.8;
var nota1 = 8.5;

var media = (nota1 + nota2) / 2;
var conceito = '';

if (media >= 8) {
  conceito = 'Ótimo';
} else if (media >= 6.5) {
  conceito = 'Bom';
} else {
  conceito = 'Regular';
}

//conceito = 'Mais ou menos'

console.log(media);
console.log(conceito);



switch (conceito) {
  case 'Ótimo':
    console.log('Parabens, você é um ótimo aluno');
    break;
  case 'Bom':
    console.log('Você está quase perfeito');
    break;
  case 'Regular':
    console.log('Você precisa estudar mais');
    break;
  default:
    console.log('Houve algum erro');
}
