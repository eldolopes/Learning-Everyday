const { of, from } = require('rxjs')
const { last, map } = require('rxjs/operators')

const data = (1, 2, 'Eldo', 'Aline', 'Rei Arthur')

of(data)
    .pipe(
        last(),
        map(data => data.toUpperCase()),
        map(data => data.split('').join(' '))
    )
    .subscribe(data => console.log(`Resultado: ${data}`))

const array = ['Eldo', 'Aline', 'Rei Arthur']

from(array)
        .pipe(
            last(),
            map(data => data[0])
        )
        .subscribe(console.log)