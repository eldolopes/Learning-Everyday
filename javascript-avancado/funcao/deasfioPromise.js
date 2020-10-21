const fs = require('fs')
const path = require('path')

const lerArquivo = () => {
    const caminho = path.join(__dirname, 'dados.txt')
    return new Promise(resolve => {
        fs.readFile(caminho, (_, data) => {
            resolve(data.toString())
        })
    })
}

lerArquivo()
    .then(console.log)