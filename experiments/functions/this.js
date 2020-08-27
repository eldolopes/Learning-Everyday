const pessoa = {
    texto: "Olá, tudo bem?",
    saudacao () {
        console.log(this.texto)
    }
}
pessoa.saudacao()

