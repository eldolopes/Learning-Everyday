const pessoa = { nome: 'Eldo Lopes'}
pessoa.nome = 'Arthur'
console.log(pessoa.nome)

//torna o objeto constante (congela)
Object.freeze(pessoa)
pessoa.nome = 'Aline Silva' //não altera
console.log(pessoa.nome)

const objetoConstante = Object.freeze({nome: 'Aline Silva'})
objetoConstante.nome = 'Arthur Lopes' // não altera
console.log(objetoConstante)