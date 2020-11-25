const produtos = [
    { produto: 'Cama', preco: 399, qtd: 12 },
    { produto: 'Sofa', preco: 455, qtd: 3},
    { produto: 'Armário', preco: 232, qtd: 65 },
    { produto: 'Mesa', preco: 676, qtd: 43 },
    { produto: 'Tapete', preco: 400, qtd: 9 },
    { produto: 'Vaso', preco: 754, qtd: 24 }

]

Array.prototype.meuMap = function(fn){
    const array = []
    for(let i = 0; i < this.length; i++){
        array.push(fn(this[i], i, this))
    }
    return array
}

Array.prototype.meuFilter = function(fn){
    const array = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

const getAcimaDe400 = item => item.preco > 400
const getNome = item => item.produto

const resultado = produtos
    .meuFilter(getAcimaDe400)
    .meuMap(getNome)
    
console.log(resultado)