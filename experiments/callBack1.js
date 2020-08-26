const array = ["Eldo", "Aline", "Arthur"]

function imprimir (nome, indice) {
    return console.log(`${indice +1}. ${nome}`)
}
array.forEach(imprimir)
array.forEach(nome => console.log(nome))


const notas = [4.8, 9.0, 7.5, 5.6, 8.6, 2.8, 8.2, 5.7]
//CALLBACK SEM FILTER
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(`Sem callback: ${notasBaixas1}`)
//CALLBACK COM FILTER
//COM RETURN
let notasBaixas2 = notas.filter(nota => {
    return nota < 7
})
//SEM RETURN
let notasNaMedia = notas.filter(nota => nota >= 7)
console.log(`Com callback: ${notasBaixas2}`)
console.log(notasNaMedia)