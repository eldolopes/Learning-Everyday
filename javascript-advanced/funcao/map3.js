const produtos = [
    { produto: 'Cama', preco: 399.5, qtd: 20} ,
    { produto: 'Armário', preco: 455.0, qtd: 60 },
    { produto: 'Sofá', preco: 232.32, qtd: 5 },
    { produto: 'Beliche', preco: 676, qtd: 14 },
    { produto: 'TV', preco: 400.89, qtd: 54 },
    { produto: 'Som', preco: 754.55, qtd: 3 }
]

const getNomes = produto => produto.produto
const valorAcumulado = produto => (produto.preco * produto.qtd).toFixed(2)

Array.prototype.meuMap = function(fn){
    const array = []
    for(let i = 0; i < this.length; i++){
        array.push(fn(this[i], i, this))
    }
    return array
}

console.log(produtos.map(getNomes))
console.log(produtos.meuMap(valorAcumulado))