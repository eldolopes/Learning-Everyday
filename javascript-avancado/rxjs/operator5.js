const { of, Observable } = require('rxjs')

const finishWith = value => {
    return source => {
        return new Observable(subscriber => {
            source.subscribe({
                next(data) {
                    if(Array.isArray(data)) {
                        const ifArray = data.filter(el => el.endsWith(value))
                        subscriber.next(ifArray)
                    } else if (data.endsWith(value)) {
                        subscriber.next(data)
                    }
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }  
}



of(['Eldo Lopes', 'Arthur Lopes', 'Aline Silva'])
    .pipe(
        finishWith('Lopes')
    )
    .subscribe(console.log)