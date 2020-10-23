function Produto (nome, preco, desc = 0.5){
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoComDesconto = function () {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Cama', 300, 0.5)
console.log(p1)
console.log(p1.nome)