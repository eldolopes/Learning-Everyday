const alunos = [
    '{"nome": "Eldo Lopes", "nota": 7.8, "bolsista": false}',
    '{"nome": "Arthur Lopes", "nota": 8.0, "bolsista": true}',
    '{"nome": "Duda Lopes", "nota": 6.5, "bolsista": false}',
    '{"nome": "Aline Silva", "nota": 3.2, "bolsista": true}'
]

const josnToObject = json => JSON.parse(json)
const alunosObjeto = alunos.map(josnToObject)

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
const algumAlunoBolsista = (resultado, bolsistas) => resultado || bolsistas

const resultado1 = alunosObjeto.map(a => a.bolsista).reduce(todosBolsistas)
const resultado2 = alunosObjeto.map(a => a.bolsista).reduce(algumAlunoBolsista)
console.log(resultado1, resultado2)
