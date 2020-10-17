const array = [3, 7, 5, 3, 4, 7, 9]

const produtos = [
    { produto: 'Cama', preco: 399, qtd: 12 },
    { produto: 'Sofa', preco: 455, qtd: 3 },
    { produto: 'Armário', preco: 232, qtd: 65 },
    { produto: 'Mesa', preco: 676, qtd: 43 },
    { produto: 'Tapete', preco: 400, qtd: 9 },
    { produto: 'Vaso', preco: 754, qtd: 24 }

]

const getTotal = item => item.preco * item.qtd
const somarArray = (acumulaodor, atual) => acumulaodor + atual

const resultadoArray = array.reduce(somarArray)
const valorTotalProdutos = produtos
    .map(getTotal)
    .reduce(somarArray)

console.log(resultadoArray)
console.log(valorTotalProdutos)


