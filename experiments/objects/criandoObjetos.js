//literal
const obj1 = {}

//função Object
const obj2 = new Object

//funções contrutoras
function Obj3 (nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Obj3('Cama', 399, 0.1)
const p2 = new Obj3('Sofá', 1300, 0.2)
console.log(`O produto que custava R$ ${p2.preco}, agora vai custar R$ ${p2.getPrecoComDesconto()}`)

//função factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase /30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Eldo', 10000, 2)
const f2 = criarFuncionario('Aline', 20000, 2)
console.log(f1.getSalario().toFixed(2))
console.log(f2.getSalario().toFixed(2))

//Object.create
const cliente = Object.create(null)
cliente.nome = 'Eldo Lopes'
console.log(cliente)
console.log(cliente.nome)

//retornar JSON em objeto
const fromJSON = JSON.parse('{"info":"Valor JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)