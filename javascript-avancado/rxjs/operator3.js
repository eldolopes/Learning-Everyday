const { Observable } = require('rxjs')

const ofWithDelay = (temp, ...elements) => {
    return new Observable(subscribe => {
        (elements || []).forEach((el, i) => {
            setTimeout(() => {
                subscribe.next(el)
                if(elements.length === i + 1) {
                    subscribe.complete()
                }
            },temp * (i + 1))
        })
    })
}

ofWithDelay(2000, 1, 2, 'Eldo', true, [1, 2, 3], {nome: 'Arthur'})
    .subscribe(console.log)