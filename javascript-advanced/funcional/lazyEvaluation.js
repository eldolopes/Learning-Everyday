//sem lazy
const eager = (a, b) => {
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}

      const valor = Math.pow(a, 3)
      return valor + b
}
console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

//com lazy
const lazy = a => {
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}

    const valor = Math.pow(a, 3)
    return b => {
        return valor + b
    }     
} 
console.time('#2')
const lazyProcess = lazy(3)
console.log(lazyProcess(100))
console.log(lazyProcess(200))
console.log(lazyProcess(300))
console.timeEnd('#2')