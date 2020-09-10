const alunos = [
    '{"nome": "Eldo Lopes", "nota": 7.8, "bolsista": false}',
    '{"nome": "Arthur Lopes", "nota": 8.0, "bolsista": true}',
    '{"nome": "Duda Lopes", "nota": 6.5, "bolsista": true}',
    '{"nome": "Aline Silva", "nota": 3.2, "bolsista": false}'
]

const josnToObject = json => JSON.parse(json)

resultadoSomaDasNotas = alunos.map(josnToObject).map(a => a.nota).reduce(function(acumulador, valorAtal){
    console.log(acumulador, valorAtal)
    let totalNotas = acumulador + valorAtal
    return totalNotas
    
})
console.log(resultadoSomaDasNotas)

const  mediaDasNotas = resultadoSomaDasNotas / alunos.length
console.log(mediaDasNotas)