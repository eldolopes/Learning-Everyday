const { Observable, noop } = require('rxjs')

const entre = (min, max) => {
    if (min > max) [max, min] = [min, max]
    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            subscriber.next(i)
        })
        /* for (let i = min; i <= max; i++) {
            subscriber.next(i)
        } */
        subscriber.complete()
    })
}

entre(4, 10)
    .subscribe(
        console.log,
        noop,
        () => console.log('Fim!')
    )   
