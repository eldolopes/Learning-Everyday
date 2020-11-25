const {from, Observable} = require('rxjs')

const firstValue = () => {
    return source => {
        return new Observable(subscriber => {
            source.subscribe({
                next(data) {
                    subscriber.next(data)
                    subscriber.complete()
                }
            })
        })
    }
}

const endValue = () => {
    return source => {
        return new Observable(subscriber => {
            let end
            source.subscribe({
                next(data){
                    end = data
                },
                complete(){
                    if(source !== undefined){
                        subscriber.next(end)
 
                    }
                    subscriber.complete()
                }
            })
        })
    }
}
 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 'último']
from(array)
    .pipe(
        //firstValue(),
        endValue()
    )
    .subscribe(console.log)