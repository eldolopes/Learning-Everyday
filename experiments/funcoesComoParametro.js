//FUNÇÃO COMO PARÂMETRO PARA OUTRA FUNÇÃO
function bomDia() {
    console.log('Bom dia')
}

function boaTarde() {
    console.log('Boa Tarde')
}

const saudacao = (fn) => {
    if(typeof fn === 'function') {
        fn()
    }
}
saudacao(bomDia)
saudacao(boaTarde)

//
const valorBase = 2 
const valorExp = 8
//FUNÇÃO COMO PARÂMETRO PARA OUTRA FUNÇÃO
function potencia1(base, exp) {
    return Math.pow(base, exp)
}

//RETORNA FUNÇÃO A PARTIR DE OUTRA FUNÇÃO
function potencia2(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}


const funcaoPotencia = potencia2(valorBase)

console.log(potencia1(valorBase, valorExp))
console.log(funcaoPotencia(valorExp))
console.log(potencia2(valorBase)(valorExp))