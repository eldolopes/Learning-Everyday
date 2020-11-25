const fs = require('fs')

const caminho = __dirname+'/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
const config = JSON.parse(conteudo)
console.log(`${config.db.host}:${config.db.port}`)

//asincrono
fs.readFile(caminho, 'utf-8', (err, data) => {
    const config = JSON.parse(data)
    console.log('vem depois', config.db)
})

const arquivo = require('./arquivo.json')
console.log('vem primeiro', arquivo )

fs.readdir(__dirname, (err, data) => {
    console.log(data)
})

const arquivo2 = require('./arquivoGerado.json')
console.log(arquivo2)