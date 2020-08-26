//CLASSE CONTRUTORA
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

//FUNÇÃO FACTORY
const Pessoa2 = (nome, sobrenome) => {
    return {
        nome: () => console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
}

const p2 = Pessoa2('Arthut', 'Lopes')
p2.nome()