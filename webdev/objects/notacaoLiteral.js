const nome = 'Eldo'
const sobrenome = 'Lopes'
const idade  = 41

const obj = { nome, sobrenome, idade}
console.log(obj)

//
const nomeAtributo = 'nota'
const valorAtributo = 9

const obj2 = {}
obj2[nomeAtributo] = valorAtributo
console.log(obj2)

const obj3 = {[nomeAtributo]: valorAtributo}
console.log(obj3)

//com função
const obj4 = {
    //tradicional
    funcao1: function() {
        //...
    },
    //reduzida
    funcao2() {
        //...
    }
}