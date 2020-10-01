function gerarNumeroEntre(min, max, tempo) {
    if(min > max){
        [max, min] = [min, max]        
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio  = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        })
    }, tempo)    
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000)
    ])
} 

gerarVariosNumeros()
    .then(numeros => `Resultado: ${numeros.sort()}`)
    .then(console.log)

const array = [2, 3, 7, 2, 9, 2, 1]
array.sort()
console.log(array)
