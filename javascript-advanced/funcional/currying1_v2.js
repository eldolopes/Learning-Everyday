const textoComTamanhoEntre = min => {
    return max => erro => texto => {
        const tamanho = (texto || '').trim().length
        if(tamanho < min || tamanho > max) {
            throw erro
        }
    }
}

const tamanhaValido = textoComTamanhoEntre(4)(255)
const validacaoProduto = tamanhaValido('Nome inválido!')

const p1 = { nome: 'A', preco: 1.45, desconto: 0.25 }
validacaoProduto(p1.nome)
