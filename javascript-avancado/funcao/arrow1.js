//passando um array
const somar = array => {   
    let total = 0 
    for(let n of array){
        total += n
    }
    return total
}
const arrayDeNumeros = [2, 3, 1, 5, 6, 8]
console.log(somar(arrayDeNumeros))

//passando um conjunto e tranformando em array com o operador rest (...)
const somar2 = (...numeros) => {   
    let total = 0 
    for(let n of numeros){
        total += n
    }
    return total
}
console.log(somar2(2, 3, 1, 5, 6, 8))

const saudacao = (saudacao, nome) => `${saudacao}, ${nome}!`
console.log(saudacao('Bom dia', 'Eldo Lopes'))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))