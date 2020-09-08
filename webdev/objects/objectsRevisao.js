const produto = new Object

produto['categoria'] = 'Móveis'
produto.nome = 'Cama'
produto.preco = 399

console.log(produto)

delete produto.preco
delete produto['categoria']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Eldo Lopes',
        idade: 41,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 232
        }
    },
    condutores: [{
        nome: 'Arthur',
        idade: 18
    }, {
        nome: 'Aline Silva',
        idade: 32
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro'] = 'Avenida Amor'
console.log(carro)
console.log(carro.proprietario.endereco.numero)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)



