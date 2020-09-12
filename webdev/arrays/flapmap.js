const escola = [{
    turma: 'Turma M1',
    alunos: [{
        nome: 'Eldo Lopes',
        nota: 8.9
    },{
        nome: 'Arthur Lopes',
        nota: 10
    }]
},{
    turma: 'Turma M1', 
    alunos: [{
        nome: 'Aline Silva',
        nota: 7.6
    },{
        nome: 'Duda Lopes',
        nota: 8.6
    }]
}]
const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
const notas2 = ([].concat([ 8.9, 10 ], [ 7.6, 8.6 ]))
console.log(notas2)

//implementando um flatmap = torna um conjunto de arrays em um único array
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas3 = escola.flatMap(getNotasDaTurma)
console.log(notas3)
