//REQUERIMENTOS INICIAIS PADRÃO DO PROJETO
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3333

//ESTABELECENDO CONEXÃO COM O BANCO DE DADOS
const mysql = require('mysql')

//IMPORTE DO VALIDADOR DO EXPRESS - FAZ A VERIFICAÇÃO PARA A VERIFICAÇÃO DE POSSÍVEIS ERROS - FOI DESINSTALADO APÓS TESTES
//const expressValidator = require('express-validator')
//app.use(expressValidator.body)

//IMPORTANDO O 'PESSOASR.JS'
const pessoasRouter = require('./routes/pRoutes')
//CONEXÃO COM O BANCO DE DADOS

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro'
})

//IMPORTA O CONTEUDO DE 'CONNECTION' COMO OBJETO PARA A VARIAVEL 'DEPENDENCIAS' QUE NESSE CASO ESTÁ SENDO RENDERIZADA EM '/POSSOAS'
const dependencias = {
    connection
}

//RESPONSAVEL POR RECEBER E PROCESSAR O QUE ENTRA NO CORPO DO BODY
const bodyParser = require('body-parser')
//RECEBE O IMPUT NO BODY E PROCESSA PARA SER USADO NO BANCO DE DADOS
app.use(bodyParser.urlencoded({ extended: false }))

//VIEW ENGINE - ONDE AS PÁGINAS ESTÃO PARA BUSCA PADRÃO
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//SET PARA BUSCAR ARQUIVOS ESTATICOS DENTRO DA PAGINA 'PUBLIC'
app.use(express.static('public'))

//SERVIÇO PRINCIPAL DE RENDERIZAÇÃO DAS PÁGINAS
app.get('/', (req,res) => res.render('home'))
         
//USANDO O 'PESSOAS' QUE FOI IMPORTADO DO 'PESSOAS.JS'
app.use('/pessoas', pessoasRouter(dependencias))



//CONECTANDO    
connection.connect(() => {
//SERVIÇO DE LISTEN DA PORTA USADA
    app.listen(port, () => console.log('CRUD LISTENING ON PORT: '+ port))
})