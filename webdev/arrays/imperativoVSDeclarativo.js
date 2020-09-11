const alunos = [
    {nome: 'Eldo Lopes', nota: 8.6},
    {nome: 'Arthur Lopes', nota: 9.4},
]

//imperativo - como fazer - função única e sem reaproveitamento
let totalNotas1 = 0
for(let i = 0; i < alunos.length; i++){
    totalNotas1 += alunos[i].nota
}
console.log(totalNotas1 / alunos.length)

//declarativo - o que fazer - várias funções que podem ser usadas em vários casos
const notas = a => a.nota
const soma = (acum, atual) => acum + atual
const totalNotas2 = alunos.map(notas).reduce(soma)
console.log(totalNotas2 / alunos.length)