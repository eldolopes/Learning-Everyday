const produtos = [
    { produto: 'Sofa', preco: 455, qtd: 3, fragil: true },
    { produto: 'Cama', preco: 399, qtd: 12, fragil: false },
    { produto: 'Armário', preco: 232, qtd: 65, fragil: true },
    { produto: 'Mesa', preco: 676, qtd: 43, fragil: false },
    { produto: 'Tapete', preco: 400, qtd: 9, fragil: true },
    { produto: 'Vaso', preco: 754, qtd: 24, fragil: true }
]
 
const somaDeQtd = (acc, el) => acc + el
const getMedia = (acc, el) => {
    const novaQtd = acc.qtd + 1
    const novoTotal = acc.total + el
    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal / novaQtd
    }
}

const totalItens = produtos
    .map(item => item.qtd)
    .reduce(somaDeQtd)
console.log(totalItens)

const resultado = produtos
    .filter(item => item.fragil)
    .map(item => item.preco * item.qtd)
    .reduce(getMedia, { qtd: 0, total: 0, media: 0})
    
console.log(resultado)