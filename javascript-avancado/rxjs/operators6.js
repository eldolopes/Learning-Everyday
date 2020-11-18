const { from, Observable } = require('rxjs')

const operatorPipeCreator = operatorFn => {
    return source => {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}

const firstValue = () => {
    return operatorPipeCreator(subscriber => ({
        next(data) {
            subscriber.next(data)
            subscriber.complete()
        }
    }))
}

const endValue = () => {
    let end
    return operatorPipeCreator(subscriber => ({ 
        next(data) {
            end = data
        },
        complete() {
            if (end !== undefined) {
                subscriber.next(end)
            }
        }   
    }))    
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 'último']
from(array)
    .pipe(
        //firstValue(),
        endValue()
    )
    .subscribe(console.log)