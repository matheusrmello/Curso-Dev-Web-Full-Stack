var aluno = { nome: 'Matheus', notas: [5.7, 8.0] };

var novaProp = 'sobrenome';

aluno.matricula = 12344;

aluno[novaProp] = 'Mello';

console.log(aluno);

//Segunda forma de se fazer um objeto

var student = new Object();
student.name = 'Matheus';

console.log(student.name);
