const composition = (...fns) => {
    return value => {
        return fns.reduce((acc, fn) => {
            return fn(acc)
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
    return data.split('').join(' ')
}

const strongExpression = composition(
    toUpperCase,
    excitedExpression,
    longWord
)

const result = strongExpression('good morning')
const result2 = strongExpression('my friend')

console.log(result, result2)