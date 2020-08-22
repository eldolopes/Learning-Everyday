const obj = {}

obj.falar = function() {return "Olá"}
console.log(obj)
console.log(obj.falar())
//
const array = [function(a, b) { return a+b}, "Função em Array"]
console.log(array[0](4, 6))
console.log(array[1])
//
function road(fun) {
    fun()
}
road(function(){ console.log('Rodando...')})
//
function soma(a, b) {
    return function(c) {
        console.log(a+b+c)
    }
}
soma(10, 2)(8)
const primeiraFunc = soma(10, 2)
primeiraFunc(10)