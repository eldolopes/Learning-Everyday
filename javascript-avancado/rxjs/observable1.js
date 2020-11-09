const {Observable} = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise')
})
promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer 1')
    subscriber.next('Observer 12')
    subscriber.next('Observer 123')
    subscriber.next('Observer 1234')
    subscriber.next('Observer 12345')
    subscriber.next('Observer 123456')
})
obs.subscribe(console.log)