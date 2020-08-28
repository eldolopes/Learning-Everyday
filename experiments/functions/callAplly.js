function getPreco(imposto = 0, moeda = 'R$') {
    return `O produto ${this.nome} custa: ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3500,
    desc: 0.1,
    imposto: 0.002,
    getPreco   
}
console.log(produto.getPreco())

//USANDO A FUMÇÃO CALL E APPLY
const carro = {
    nome: 'Corolla',
    preco: 50000,    
    desc: 0.2
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//CALL
console.log(getPreco.call(carro, 0.15, 'USD$'))
//APPLY
console.log(getPreco.apply(carro, [0.5, '$']))

function precoComDesconto (desconto) {
    return this.preco * (1 - desconto)
}

const produto2 = {
    nome: 'Toyota Hilux',
    preco: 1000000,
    precoComDesconto
}

const resultado = precoComDesconto.call(produto2, 0.2)
console.log(`O valor total com desconto é de R$ ${resultado}`)