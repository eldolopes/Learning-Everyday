function esperarPor(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando callback...')
            resolve('Executando promise...')
        }, tempo)
    })
}

esperarPor(3000)
    .then(resultado => console.log(resultado))
    .catch(e => console.log(e))