const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4500, fragil: true},
    {nome: 'Copo de Vidro', preco: 24.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 19.50, fragil: false},
]

const caro = valor => valor.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)