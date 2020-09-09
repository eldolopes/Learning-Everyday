//implementando o map na mão - por baixo dos panos
Array.prototype.map2 = function(callback){
    const newArray = []
    for(i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const alunos = [
    '{"nome": "Eldo Lopes", "idade": 41, "Ocupacao": "desenvolvedor"}',
    '{"nome": "Arthur Lopes", "idade": 2, "Ocupacao": "filho do painho"}',
    '{"nome": "Duda Lopes", "idade": 17, "Ocupacao": "estudante"}',
    '{"nome": "Aline Silva", "idade": 32, "Ocupacao": "esteticista"}'
]

const paraObjeto = json => JSON.parse(json)
const apenasNomes = aluno => aluno.nome

const resultado = alunos.map2(paraObjeto).map2(apenasNomes)
console.log(resultado)
