function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)

MeuObjeto.prototype.nome = 'Eldo'
MeuObjeto.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = 'Arthur'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Aline'
obj3.falar()