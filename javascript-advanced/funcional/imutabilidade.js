const array = [2, 4, 3, 8, 3, 9, 4, 5, 10]

const somar = (a, b) => a + b
const total = array.reduce(somar, 10)

console.log(total)