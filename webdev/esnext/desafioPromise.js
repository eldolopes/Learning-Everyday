const fs = require('fs')
const { parse } = require('path')
const path = require('path')

const caminnho = path.join(__dirname, 'dados.txt')

function lerAquivo(caminnho) {
    return new Promise (resolve => {
        fs.readFile(caminnho, (err, conteudo) => {
            if(err){
                console.log(err)
            }else{
                resolve(conteudo.toString().toUpperCase())
            }
        })
    })
}

lerAquivo(caminnho)
    .then(console.log)
    .catch(e => console.log(e))