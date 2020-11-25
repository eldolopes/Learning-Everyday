const array = [3, 7, 5, 3, 4, 7, 9]

//reduce implementado simplificado
Array.prototype.meuReduce = function(fn, inicial = 0) {
    let acc = inicial
    for(let i = 0; i < this.length; i++){       
        acc = fn(acc, this[i], i, this)
    }    
    return acc
}
//reduce implementado elaborado
Array.prototype.reduceElaborado = function( fn, inicial ) {
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const getTotal = (acc, atual) => acc + atual

const resultado1 = array.meuReduce(getTotal)
const resultado2 = array.reduceElaborado(getTotal)

console.log(resultado1)
console.log(resultado2)