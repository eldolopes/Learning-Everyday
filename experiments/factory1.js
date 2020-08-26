function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Cama', 599.00))
console.log(criarProduto('Sofá', 1299.00))
