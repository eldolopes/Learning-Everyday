const times = new Set()
times.add('Sport')
times.add('Nautico').add('Santa Cruz')

console.log(times)
times.delete('Nautico')
console.log(times)

const nomes = ['Eldo', 'Arthur', 'Duda']
const nomesSet = new Set(nomes)
console.log(nomes)
console.log(nomesSet)