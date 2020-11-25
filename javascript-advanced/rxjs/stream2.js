const {interval} = require('rxjs')

const numberGenerate = interval(500)

const sub1 = numberGenerate.subscribe(num => {
    console.log(Math.pow(2, num))
})

const sub2 = numberGenerate.subscribe(num => {
    console.log({ numero: num })
})

setTimeout(() => {
    sub1.unsubscribe()
}, 8000)

setTimeout(() => {
    sub2.unsubscribe()
}, 10000)
