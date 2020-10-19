const produtos = [
    { produto: 'Sofa', preco: 455, qtd: 3, fragil: true },
    { produto: 'Cama', preco: 399, qtd: 12, fragil: false },
    { produto: 'Armário', preco: 232, qtd: 65, fragil: true },
    { produto: 'Mesa', preco: 676, qtd: 43, fragil: false },
    { produto: 'Tapete', preco: 400, qtd: 9, fragil: true },
    { produto: 'Vaso', preco: 754, qtd: 24, fragil: true }
]

//reduce implementado
Array.prototype.meuReduce = function(fn) {
    let acc = 0    
    for(let i = 0; i < this.length; i++){       
        acc = fn(acc, this[i], i, this)
    }    
    return acc
}
 
const somaDeQtd = (acc, el) => acc + el
//apenas a média (simplificado)
const apenasMedia = (acc, atual, i, array) => acc + atual / array.length
//objeto com qtd, tota, e media 
const objQtdTotalMedia = (acc, el) => {
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

const resultado1 = produtos
    .filter(item => item.fragil)
    .map(item => item.preco * item.qtd)
    .meuReduce(apenasMedia, 0) 

const resultado2 = produtos
    .filter(item => item.fragil)
    .map(item => item.preco * item.qtd)
    .reduce(objQtdTotalMedia, { qtd: 0, total: 0, media: 0})



console.log(resultado1)
console.log(resultado2)