const pai = {
    nome: 'Eldo',
    corDosOlhos: 'castanhos'
}

const filha = Object.create(pai)
filha.nome = 'Maria Eduarda'
console.log(`${filha.nome} tem olhos ${filha.corDosOlhos}`)

const filho = Object.create(pai, {
    nome: { value: 'Arthur', writable: false, enumerable: true }
})
filho.nome = 'Maria Eduarda' //writable: false
//filho.corDosOlhos = 'azuis'
console.log(`${filho.nome} tem os olhos ${filho.corDosOlhos}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for(let key in filho) {
    filho.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}   