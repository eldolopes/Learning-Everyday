const produtos = [
    { produto: 'Cama', preco: 399, desconto: 0.3 },
    { produto: 'Sofa', preco: 455, desconto: 0.4 },
    { produto: 'Armário', preco: 232, desconto: 0.15 },
    { produto: 'Mesa', preco: 676, desconto: 0.7 },
    { produto: 'Tapete', preco: 400, desconto: 0.5 },
    { produto: 'Vaso', preco: 754, desconto: 0.43 }

]

Array.prototype.meuFilter = function(fn){
    const array = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

Array.prototype.meuMap = function(fn){
    const array = []
    for(let i = 0; i < this.length; i++){
        array.push(fn(this[i], i, this))
    }
    return array
}

const getAcimaDe400 = item => item.preco > 400
const getNome = item => item.produto

const resultado = produtos
    .meuFilter(getAcimaDe400)
    .meuMap(getNome)
    
console.log(resultado)