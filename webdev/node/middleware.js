const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}
const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}
const passo3 = ctx => ctx.valor3 = 'mid3'

//operador rest (...) junta várias variáveis(função) em um array
const exec = (ctx, ...middlewares) => {
    const execMiddleware = indice => {
        middlewares && indice < middlewares.length && middlewares[indice] //sendo assim
        (ctx, () => execMiddleware(indice + 1)) //execute
    }
    execMiddleware(0)//indice inicial
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
