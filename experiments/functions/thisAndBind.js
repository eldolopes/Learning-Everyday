const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // se armazenado na variável a função gera conflito de paradigma

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()