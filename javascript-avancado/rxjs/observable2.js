const { Observable } = require('rxjs')

const obs = new Observable( subscriber => {
    subscriber.next("Observer")
    subscriber.next("é")
    subscriber.next("poderoso!")
    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Erro no sistema!')
    }
})

obs.subscribe(
    observer => console.log(`Resposta: ${observer}`),
    error => console.log(error),
    () => console.log('Fim!')
)

/* obs.subscribe({
    next(observer) {
        console.log(`Resposta: ${observer}`)
    },
    error(e) {
        console.log(e)
    },
    complete() {
        console.log('Fim!')
    }
})
 */