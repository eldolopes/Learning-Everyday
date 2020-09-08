function Aula (nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem vindos', 1234)
const aula2 = new Aula('Até breve!', 54321)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params){
    const obj ={}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = new Aula('Bem vindos', 1234)
const aula4 = new Aula('Até breve!', 54321)
console.log(aula3, aula4)
    