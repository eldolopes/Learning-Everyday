function Pessoa() {
    this.contagem = 0
    setInterval(function() {
        this.contagem++
        console.log(this.contagem)
    }.bind(this), 1000)
}
new Pessoa

function Pessoa2() {
    this.contagem = 0
    setInterval(() => {
        this.contagem++
        console.log(this.contagem)
    }, 1000)
}
new Pessoa2

function Pessoa3() {
    this.contagem = 0
    const self = this
    setInterval(function(){
        self.contagem++
        console.log(self.contagem)
    }, 1000)
}
new Pessoa3