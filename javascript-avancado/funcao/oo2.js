class Produto {
    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get precoComDesconto(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Cama', 500)
console.log(p1)
console.log(p1.nome)