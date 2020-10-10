//declaration
function bomDia () {
    console.log('Bom dia!')
}
//Expression
const boaTarde = () => {
    console.log('Boa Tarde')
}

//função como parâmetro para outra função
function executarComFuncao (fn) {
    if (typeof fn === 'function') {
        fn()
    }
}
executarComFuncao(10)//foi ignorado por não ser função
executarComFuncao(bomDia)
executarComFuncao(boaTarde)

//função chamando outra função

function potencia (base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const resultado = potencia(2)(8)
console.log(resultado)

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
