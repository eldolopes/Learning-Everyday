//criando o método - por baixo dos panos
Array.prototype.forEach2 = function(callback){
    for(let i =0; i < this.length; i++){
        callback(this[i], i, this)//nome no indice, indice, array
    }
}
const aprovados = ['Eldo', 'Arthur', 'Aline', 'Duda']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})