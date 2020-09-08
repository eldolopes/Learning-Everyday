//CLASSE CONSTRUTORA
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falarNomeCompleto() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
const p1 = new Pessoa('Eldo', 'Lopes')
p1.falarNomeCompleto()
console.log(typeof Pessoa)
console.log(typeof p1)

//FUNÇÃO CONSTRUTORA
function Pessoa2(nome, sobrenome) {
   this.nome = nome
   this.sobrenome = sobrenome

   this.nomeCompleto = () => {
       console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
   }
}
const p2 = new Pessoa2('Arthur', 'Lopes')
p2.nomeCompleto()

console.log(typeof Pessoa2)
console.log(typeof p2)