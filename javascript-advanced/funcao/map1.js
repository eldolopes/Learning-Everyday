const arrayNumeros = [2, 4, 6, 3, 5, 6, 7]
function muiltiplicacao (num) {
    return num * 2
}
console.log(arrayNumeros.map(muiltiplicacao))

const arrayNomes = ['Eldo', 'Arthur', 'Aline']
function primeiraLetra (nome) {
    return nome[0]
}
const letrasMaiusculas = nome => nome.toUpperCase()
console.log(arrayNomes.map(primeiraLetra))
console.log(arrayNomes.map(letrasMaiusculas))
