const produto = new Object

produto['categoria'] = 'Móveis'
produto.nome = 'Cama'
produto.preco = 399

console.log(produto)

delete produto.preco
delete produto['categoria']
console.log(produto)



