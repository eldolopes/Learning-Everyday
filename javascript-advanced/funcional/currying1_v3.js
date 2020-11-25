const textoComTamanhoEntre = (min, max) => {
    return erro => texto => {
        const tamanho = (texto || '').trim().length
        if(tamanho < min || tamanho > max) {
            throw erro
        }
    }
}

const aplicarValidacao = fn => {
    return valor => {
        try {
           fn(valor) 
        } catch (error) {
            return { ERRO: error }
        }
    }
}

const p1 = { nome: 'A', preco: 1.45, desconto: 0.25 }
const p2 = { nome: 'AB', preco: 1.45, desconto: 0.25 }

const apenasProdutoComNomevalido = textoComTamanhoEntre(4, 255)('Nome inválido!')
const validarProduto = aplicarValidacao(apenasProdutoComNomevalido)

console.log(validarProduto(p1.nome))
console.log(validarProduto(p2.nome))

