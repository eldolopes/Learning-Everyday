const notas = [6.7, 7.9, 8, 3.5, 7.5, 9.2]
for(let index in notas) {
    console.log(`índice ${index} = ${notas[index]}`)
}

const pessoa = {
    nome: "Eldo",
    sobrenome: "Lopes",
    idade: 41,
    peso: 65
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}