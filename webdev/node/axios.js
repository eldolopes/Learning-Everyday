const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = lugar => lugar.pais === 'China'
const mulheres = pessoa => pessoa.genero === 'F'
const menorSalario = (valorAtual, valorAcumulado) => {
    return valorAtual.salario < valorAcumulado.salario ? valorAtual : valorAcumulado
}

axios.get(url).then(res => {
    const funcionarios = res.data

    const resultado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(resultado)
})