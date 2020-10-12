const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const exibirConteudo = (_, data) => console.log(data)
fs.readFile(caminho, 'utf-8', exibirConteudo)