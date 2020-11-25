function getAleatoryMinMax(max , min) {
    const value = Math.random() * (max -min) + min
    return Math.floor(value)
}

let value = 0
while(value != 10) {
    value = getAleatoryMinMax(-1, 11)
    console.log(`O valor sorteado foi ${value}`)
}
