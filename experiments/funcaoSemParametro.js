//FUNÇÃO SEM PARÂMETROS QUE RECEBE O PARÂMETRO PELO 'ARGUMENTS'
function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
//PASS
const total = soma(2.6, 5.1, 7.4)
console.log(total)