const alunos = [
    '{"nome": "Eldo Lopes", "nota": 7.8, "bolsista": false}',
    '{"nome": "Arthur Lopes", "nota": 8.0, "bolsista": true}',
    '{"nome": "Duda Lopes", "nota": 6.5, "bolsista": true}',
    '{"nome": "Aline Silva", "nota": 3.2, "bolsista": false}'
]

const josnToObject = json => JSON.parse(json)

const resultado = alunos.map(josnToObject).map(a => a.bolsista).reduce(function(callback){
    if(callback == true){
        return bolsista
    }
})
console.log(resultado)