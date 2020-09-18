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

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')
const homem = pessoa => pessoa.genero === 'M'
const chineses = chines => chines.pais === 'China'
const maiorSalario = (atual, acumulado) => {
    return atual.salario > acumulado.salario ? atual : acumulado
}

axios.get(url).then( res => {
    const dados = res.data
    const resultado = 
        dados
        .filter(homem)
        .filter(chineses)
        .reduce(maiorSalario)    
    console.log(resultado)
})