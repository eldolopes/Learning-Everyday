const fs =require('fs')

const produto = {
    nome: 'Cama Box',
    preco: 999,
    desconto: 0.15
}
//criar arquivo
fs.writeFile(__dirname +'/arquivoGerado.json', JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo Salvo.")
})

//ler arquivo
fs.readFile(__dirname + '/arquivoGerado.json', (err, data) => {
    const resultado = JSON.parse(data)
    console.log(resultado)
})

const url = 'https://covid19-brazil-api.now.sh/api/report/v1'

const axios = require('axios')
const maiorNumeroDeMortes = (atual, acumulado) => {
    return atual.deaths > acumulado.deaths ? atual : acumulado
}
const menorNumeroDeMortes = (atual, acumulado) => {
    return atual.deaths < acumulado.deaths ? atual : acumulado
}

axios.get(url).then( res => {
    const dados = res.data.data
    const resultadoMaior = dados.reduce(maiorNumeroDeMortes)
    const resultadoMenor = dados.reduce(menorNumeroDeMortes)   
    console.log(resultadoMaior, resultadoMenor)
})