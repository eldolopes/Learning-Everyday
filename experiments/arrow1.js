//SEM USO DA ARROW
function Contagem () {
    this.contador = 0
    const self = this
    setInterval(function() {        
        self.contador++
        console.log(self.contador)
    }, 1000)
}
new Contagem()

//COM USO DA ARROW
function Contagem () {
    this.contador = 0

    setInterval(() => {
        this.contador++
        console.log(this.contador)
    }, 1000)
}
new Contagem()
