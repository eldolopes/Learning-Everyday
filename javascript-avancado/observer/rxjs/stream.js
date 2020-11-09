const arrayGenerate = array => {
    return {
        start(fn) {
            let indice = 0
            const interval = setInterval(() => {
                if(indice >= array.length) {
                    clearInterval(interval)
                } else {
                    fn(array[indice])
                    indice++
                }
            }, 1000)
            return {
                stop() {
                    clearInterval(interval)
                }
            }
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const temp1 = arrayGenerate(nums)
const exec1 = temp1.start(num => console.log(Math.pow(2, num)))

setTimeout(() => {
    exec1.stop()
}, 6000)

 arrayGenerate(['Eldo', 'Arthur', 'Aline']).start(console.log)
