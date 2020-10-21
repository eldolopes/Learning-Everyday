const esperandoPor = (valor, tempo = 2000, infoOrSeparete = '-') => {
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log(`${valor} ${infoOrSeparete} Aync/Await`)), tempo)
    })
}

/* esperandoPor("Promise 1", 2000, 'sem')
    .then(esperandoPor('Promise 2', 3000, 'sem'))   
    .then(esperandoPor('Promise 3', 5000, 'sem')) */
    

const executar = async() => {
    await esperandoPor('Primeiro', 1000)
    await esperandoPor('Segundo'), 3000
    await esperandoPor('Terceiro', 5000)
}
executar()
