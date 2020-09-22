const express = require('express')
const app = express()

const database = require('./database')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(database.getAllProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = database.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if(err){
        console.log('ERRO: ', err)
    }else{
        console.log(`SERVER ONLINE: http://localhost:${port}`)
    }
}) 