
Array.prototype.meuMap = function (fn) {
    const array = []
    for (let i = 0; i < this.length; i++){
        array.push(fn(this[i], i, this))
    }
    return array
}
const array = [2, 4, 6, 8, 10]
const dobro = num => num * 2

console.log(array.meuMap(dobro))