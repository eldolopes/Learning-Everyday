//implementando o reduce na mão
Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    '{"nome": "Eldo Lopes", "nota": 7.8, "bolsista": false}',
    '{"nome": "Arthur Lopes", "nota": 8.0, "bolsista": true}',
    '{"nome": "Duda Lopes", "nota": 6.5, "bolsista": false}',
    '{"nome": "Aline Silva", "nota": 3.2, "bolsista": true}'
]

const josnToObject = json => JSON.parse(json)
const alunosEmObjeto = alunos.map(josnToObject)

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
const algumAlunoBolsista = (resultado, bolsistas) => resultado || bolsistas

const resultado1 = alunosEmObjeto.map(a => a.bolsista).reduce2(todosBolsistas)
const resultado2 = alunosEmObjeto.map(a => a.bolsista).reduce2(algumAlunoBolsista)
console.log(resultado1, resultado2)