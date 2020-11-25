const composition = (...fns) => {
    return value => {
        return fns.reduce(async (acc, fn) => {
            return fn(await acc)
        }, value)
    }
}

const toUpperCase = data => {
    return data.toUpperCase()
}
const excitedExpression = data => {
    return `${data}!!!`
}
const longWord = data => {    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data.split('').join(' '))
        }, 3000)
    })
}

const strongExpression = composition(
    toUpperCase,
    excitedExpression,
    longWord
)

const upExpression = composition(
    toUpperCase,
    excitedExpression
)

const toArray = data => data.split()

strongExpression('good morning')
    .then(console.log)

upExpression('my friend')
    .then(toArray)
    .then(console.log)

