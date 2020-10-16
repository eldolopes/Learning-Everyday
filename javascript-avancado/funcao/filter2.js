const produtos = [
    { produto: 'Cama', preco: 399, desconto: 0.3 },
    { produto: 'Sofa', preco: 455, desconto: 0.4 },
    { produto: 'Armário', preco: 232, desconto: 0.15 },
    { produto: 'Mesa', preco: 676, desconto: 0.7 },
    { produto: 'Tapete', preco: 400, desconto: 0.5 },
    { produto: 'Vaso', preco: 754, desconto: 0.43 }

]
const getPreco = item => item.preco >= 400

const resultado = produtos.filter(getPreco)
console.log(resultado)