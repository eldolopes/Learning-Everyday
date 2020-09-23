const express = require('express')
const app = express()

const database = require('./database')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/produtos', (req, res, next) => {
    const produto = database.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = database.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.get('/produtos', (req, res, next) => {
    res.send(database.getAllProducts())
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = database.deleteProducts(req.params.id)
    res.send(product)
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if(err){
        console.log('ERRO: ', err)
    }else{
        console.log(`SERVER ONLINE: http://localhost:${port}`)
    }
}) 