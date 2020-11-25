//REQUERIMENTOS INICIAIS PADRÃO DO PROJETO
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3333

const mysql = require('mysql')

//const expressValidator = require('express-validator')
//app.use(expressValidator.body)

const pessoasRouter = require('./routes/pRoutes')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro'
})

const dependencias = {
    connection
}

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req,res) => res.render('home'))
app.use('/pessoas', pessoasRouter(dependencias))
 
connection.connect(() => {
    app.listen(port, () => console.log('CRUD LISTENING ON PORT: '+ port))
})