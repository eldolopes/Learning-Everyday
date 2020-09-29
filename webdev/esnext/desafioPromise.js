const fs = require('fs')
const { parse } = require('path')
const path = require('path')
const { stringify } = require('querystring')

const caminnho = path.join(__dirname, 'dados.txt')

function lerAquivo (caminnho) {
    return new Promise (resolve => {
        fs.readFile(caminnho, (_, ) => {
            resolve(stringify())
        })
    })
}

lerAquivo(caminnho)
    .then(console.log)