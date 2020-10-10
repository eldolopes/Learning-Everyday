function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const soma = somar(2)(4)(4)
console.log(soma)


function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}
function diminuir(a, b) {
    return a - b
}
function somar1(a, b) {
    return a + b
}
console.log(calcular(5)(2)(multiplicar))
console.log(calcular(5)(2)(dividir))
console.log(calcular(5)(2)(diminuir))
console.log(calcular(5)(2)(somar1))