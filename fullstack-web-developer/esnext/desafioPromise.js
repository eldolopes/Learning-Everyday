const fs = require('fs')
const path = require('path')

const caminnho = path.join(__dirname, 'dados.txt')

function lerAquivo() {
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

lerAquivo()
    .then(console.log)
    .catch(e => console.log(e))