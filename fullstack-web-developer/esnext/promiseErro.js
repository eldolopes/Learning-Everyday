function chamandoOuNao (funcaoOuDado, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        } else {
            resolve(funcaoOuDado)
        }
    })
}

function func1() {
    return 'Deu tudo certo!'
}
const probabilidade = 0.5
chamandoOuNao(func1(), probabilidade)
    .then(console.log)
    .catch(err => console.log(err))