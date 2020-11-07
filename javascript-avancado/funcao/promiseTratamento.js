const funcionarOuNao = valor => {
    return chanceDeErro => {
       return new Promise((resolve, reject) => {
        if(Math.random() < chanceDeErro){
            reject('Erro no processo')
        }else{
            resolve(valor)
        }
    }) 
    }    
}

const result = funcionarOuNao('aceito')

result(0.5)
    .then(data => data.toUpperCase())
    .then(resolve => console.log(`O valor foi ${resolve}`))
    .catch(reject => console.log(`Erro: ${reject}. Tente novamente.`))
    .then(() => console.log('Processo finalizado.'))