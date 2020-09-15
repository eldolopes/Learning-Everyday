const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getChinese = country => country.pais === 'China'
const getBrazilian = country => country.pais === 'Brazil'
const getWomans = woman => woman.genero === 'F'
const getMans = man => man.genero === 'M'
const lowSalary = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const highSalary = (func, funcAtual) => {
return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(res => {
    const funcionarios = res.data   

    const getFuncionario = funcionarios
        .filter(getChinese)
        .filter(getWomans)
        .reduce(lowSalary)
    
        console.log(getFuncionario)
})

