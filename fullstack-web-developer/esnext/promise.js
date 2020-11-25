function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Meu nome é ')// tempo e frase a ser usada como parâmetros
    .then(mesmaFraseMaisConcat => mesmaFraseMaisConcat.concat('Eldo Lopes'))
    .then(novaFraseComConact => console.log(novaFraseComConact))