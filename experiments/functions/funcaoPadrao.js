function soma1(a, b, c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}
console.log(soma1(null, undefined, false))

function soma2(a = 0, b = 0, c = 0) {
    return a + b + c
}
console.log(soma2(4))