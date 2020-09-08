const familia = ['Eldo', 'Arthur', 'Duda', 'Aline']
familia.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})
familia.forEach((nome, indice) => {
    console.log(`${indice+1}) ${nome}`)
})
familia.forEach(nome => console.log(nome))

const exibirAprovados = familia => console.log(familia)
familia.forEach(exibirAprovados)