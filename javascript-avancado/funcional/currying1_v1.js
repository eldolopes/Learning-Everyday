const somar = (a) => {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const primeiraSoma = somar(1)(2)
const segundaSoma = primeiraSoma(3)
console.log(segundaSoma)

const textoComTamanhoEntre = (min, max, erro, texto) => {
    const tamanho = (texto || '').trim().length
    if(tamanho < min || tamanho > max) {
        throw erro
    }
} 

const p1 = { nome: 'A', preco: 1.45, desconto: 0.25 }
textoComTamanhoEntre(4, 255, 'Nome inválido!', p1.nome)
