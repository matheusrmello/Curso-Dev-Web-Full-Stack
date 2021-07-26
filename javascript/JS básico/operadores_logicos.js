// && e

var a = true
var b = false

var c = a && b

console.log(c)


console.log('----------------------------------------------')

var anos = 27
var maior20 = anos >= 20
var menor30 = anos <= 30

//var anos = maior20 && menor30

console.log('Quantos anos você tem:', anos)
console.log('Maior que 20 anos:', maior20)
console.log('Menor que 30 anos:', menor30)

console.log('----------------------------------------------')

// || ou

var d = true
var e = false

var f = d || e

console.log(f)


var idade = 67
var maior65 = idade >= 65
var menor10 = idade <= 10

var gratuidade = maior65 || menor10

console.log('Idade:', idade)
console.log('Maior que 65 anos:', maior65)
console.log('Menor que 10 anos:', menor10)

console.log('Tem direito a gratuidade:', gratuidade)


console.log('----------------------------------------------')

// Negativo

var idade_ = 18

var maior25 = anos >= 25
var menor25 = !maior25

console.log('Maior que 25:', maior25)
console.log('Menor que 25:', menor25)

console.log(!true)
