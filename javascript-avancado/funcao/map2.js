const array = [
    { produto: 'Cama', preco: 399, desconto: 0.3 },
    { produto: 'Cama', preco: 455, desconto: 0.4 },
    { produto: 'Cama', preco: 232, desconto: 0.15 },
    { produto: 'Cama', preco: 676, desconto: 0.7 },
    { produto: 'Cama', preco: 400, desconto: 0.5 },
    { produto: 'Cama', preco: 754, desconto: 0.43 }

]

const desconto = produto => {
    return produto.preco * ( 1 - produto.desconto )
}
const custo = produto => produto.preco * 0.3
const toFixed = produto => produto.toFixed(2)
const preco = produto => produto.preco

const valorCheio = array.map(preco).map(toFixed)
const produtoComDesconto = array.map(desconto).map(toFixed)
const custoProduto = array.map(custo).map(toFixed)


console.log(valorCheio)
    