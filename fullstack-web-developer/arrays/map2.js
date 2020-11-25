const alunos = [
    '{"nome": "Eldo Lopes", "idade": 41, "Ocupacao": "desenvolvedor"}',
    '{"nome": "Arthur Lopes", "idade": 2, "Ocupacao": "filho do painho"}',
    '{"nome": "Duda Lopes", "idade": 17, "Ocupacao": "estudante"}',
    '{"nome": "Aline Silva", "idade": 32, "Ocupacao": "esteticista"}'
]

const paraObjeto = json => JSON.parse(json)
const apenasNomes = aluno => aluno.nome

const resultado = alunos.map(paraObjeto).map(apenasNomes)
console.log(resultado)
