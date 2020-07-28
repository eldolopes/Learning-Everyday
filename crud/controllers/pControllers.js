		//FAZ REQUERIMENTO DA FUNÇÃO INICIAL  EM 'pessoasM' QUE PEGA OS DADOS GERAIS DO BANCO DE DADOS
const pModels = require('../models/pModels')

//FUNÇÃO EM ASYNC QUE PEGA O CONTEUDO DA FUNÇÃO ANTERIOR E RENDERIZA OS DADOS PARA 'PESSOAS/INDEX.EJS' 
const index = async(connection, req, res) => {
    const results = await pModels.findAll(connection)
    res.render('pessoas/index', { pessoas: results })
}

//FUNÇÃO EM ASYNC QUE RECEBE A FUNÇÃO ANTEIROR - APAGA E REDIRECIONA PARA '/PESSOAS'
const deleteOneC = async(connection, req, res) => {
    await pModels.deleteOneM(connection, req.params.id)
    res.redirect('/pessoas')
}

//FUNÇÃO QUE APENAS RENDERIZA A PÁGINA 'CREATE' DENTRO DE PESSOAS PARA SER USADO EM ROUTER
const createForm = (req, res) => {
    res.render('pessoas/create')
}

const createProcess = (connection, req, res) => {
    pModels.createPessoa(connection, req.body)   
    res.redirect('/pessoas')
    //res.send(req.body)
}

//FUNÇÃO QUE APENAS RENDERIZA A PÁGINA 'CREATE' DENTRO DE PESSOAS PARA SER USADO EM ROUTER
const updateForm = async(connection, req, res) => {
    const pessoaForm = await pModels.findById(connection, req.params.id)
    res.render('pessoas/update', { pessoaForm })
    //res.send(req.params)
}

const updateProcess = (connection, req, res) => {
    pModels.updatePessoa(connection, req.params.id, req.body)
    res.redirect('/pessoas')      
    //res.send(req.body)
}

module.exports = {
    index,
    deleteOneC,
    createForm,
    createProcess,
    updateForm,
    updateProcess,
}