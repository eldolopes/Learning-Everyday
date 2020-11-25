const obj = {
    nome: 'Eldo Lopes',
    idade: 41,
    peso: 65
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

Object.entries(obj).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)    
})
//destruction assign
Object.entries(obj).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)    
})
Object.defineProperty(obj, 'nascimento', {
    enumerable: true,
    writable: false,
    value: '26/07/1979'
})
obj.nascimento = '26/08/1800'
console.log(obj.nascimento)
console.log(Object.keys(obj))
console.log(Object.length)
console.log(obj.nome)

//assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 ={ c: 3, a:4 }
const obj2 = Object.assign(dest, o1, o2, obj)
console.log(obj2)

//congelar objeto
Object.freeze(obj2)
obj2.a = 120
console.log(obj2)