const gerarNumerosEntre = (min, max) => {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = (max - min + 1) + min
        const gerador = parseInt(Math.random() * fator)
        resolve(gerador)
    })
}

gerarNumerosEntre(0, 60)
    .then(console.log)

const variosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60)
    ])
}

variosNumeros()
    .then(data => data.slice())
    .then(data => data.sort())
    .then(console.log)