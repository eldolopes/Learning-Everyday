//não adicionar
const pessoa = Object.preventExtensions({
    nome: 'Eldo Lopes',
    idade: 41,
    altura: 183
})
console.log('Extensível: ', Object.isExtensible(pessoa))
pessoa.nome = 'Arthur'
pessoa.peso = 65
delete pessoa.altura
console.log(pessoa)

//selar
const produto = Object.seal({
    nome: 'Garrafa Térmica',
    preco: 49,
    tag: 'Promoção'
})
console.log('Está selada: ', Object.isSealed(produto))
produto.nome = 'Armário'
produto.categoria = 'Móveis'
delete produto.tag
console.log(produto)

//congelar
const lugar = Object.freeze({
    nome: 'Espírito Santo',
    populacao: 2000000
})
console.log('Está congelado:', Object.isFrozen(lugar))
lugar.nome = 'Pernambuco'
lugar.tamanho = 500000
delete lugar.populacao
console.log(lugar)