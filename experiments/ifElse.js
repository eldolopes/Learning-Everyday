/*
const resultOfCourse = (nota) => {
    if(nota >= 7) {
        console.log('Parabéns, você foi aprovado.')
    } else {
        console.log('Infelizmente você foi reprovado.')
    }
}
resultOfCourse('8') // aceita parâmetros de número como string
*/

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recupercação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log("Nota inválida")
    }
}
imprimirResultado(8)
//imprimirResultado('10') // não aceita parâmetros de números como string