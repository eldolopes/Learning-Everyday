function exec(fn, a , b) {
    return fn(a, b)
}

const somar = (x, y) => x + y
const diminuir = (x, y) => x - y

console.log(exec(somar, 30, 50))
console.log(exec(diminuir, 130, 50))

setInterval(() => console.log('Função...'), 1000)

const fn = () => console.log('Função 2...')
setInterval(fn, 2000)