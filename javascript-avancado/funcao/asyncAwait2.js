const valorEntre = (min, max, numerosProibibos) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1) + min
        const gerador = parseInt(Math.random() * fator)        
        if (numerosProibibos.includes(gerador)) {
            reject('Algum número repetiu. Tente novamente.')
        }else{
            resolve(gerador)
        }
    })
}

const gerarMega = async() => {
    const array = []
    for (let _ of Array(6).fill()) {
        array.push(await valorEntre(1, 60, array))
    }
    if(array.includes(0)) {
        console.log('Tente novamente.')
    }else{
        return array
    }    
}

gerarMega()
    .then(console.log)
    .catch(console.log)
    
/* function executar() {
    const resultado = Promise.all([
        valorEntre(1, 60,[1, 3, 5]),
        valorEntre(1, 60,[1, 3, 5]),
        valorEntre(1, 60,[1, 3, 5]),
        valorEntre(1, 60,[1, 3, 5]),
        valorEntre(1, 60,[1, 3, 5]),
        valorEntre(1, 60,[1, 3, 5])
    ]).catch(console.log)
    return resultado
}
executar() */

/* valorEntre(1, 5, [1, 3, 5])
    .then(console.log)
    .catch(console.log) */

