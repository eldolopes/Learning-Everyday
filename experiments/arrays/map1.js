const nums =[1, 2, 3, 4, 5, 6, 7]

let dobro = nums.map(function(e){
    return e*2
})
console.log(dobro)

const soma = e => e + 10
const triplo = e => e * 3
const converterReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado = nums.map(soma).map(triplo).map(converterReal)
console.log(resultado)