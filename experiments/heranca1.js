Object.prototype.valor0 = '0' //não deve ser utilado dessa forma

const avo = { valor1: '1' }
const pai = { __proto__: avo, valor2: '2' }
const filho = { __proto__: pai , valor3: '3' }
console.log(filho.valor0, filho.valor1, filho.valor2, filho.valor3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.modelo}: ${this.velAtual}km/h de  ${this.velMax}km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 325
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())