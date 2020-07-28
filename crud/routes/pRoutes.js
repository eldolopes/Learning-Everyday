const express = require('express')
const pessoasController = require('../controllers/pControllers')


//CRIA UMA FUNÇÃO  QUE RETORNA O OBJETO 'CONNECTION' COM O CONTEUDO EXTRAIDO DO BANCO DE DADOS - CADASTRO:  'PESSOAS'
const pessoasRouter = ({ connection }) => {    
    //NESSE CASO, ESTÁ SENDO USADO NO 'INDEX' E SENDO RENDERIZADO PELO 'HOME'
    const router = express.Router()
    
    //RECEBE OS DADOS DE 'PESSOAS' E RETORNA O CONTEUDO PARA A FUNÇÃO 'PESSOASROUTER'
    router.get('/', pessoasController.index.bind(null, connection))
    //RECEBE AS IDS DE DENTRO DE 'PESSOAS' 
    router.get('/delete/:id', pessoasController.deleteOneC.bind(null, connection))

    const create = '/create'
    router.get(create, pessoasController.createForm)
    router.post(create, pessoasController.createProcess.bind(null, connection))

    const update = '/update/:id'
    router.get(update, pessoasController.updateForm.bind(null, connection))    
    router.post(update, pessoasController.updateProcess.bind(null, connection))

    return router
}  

module.exports = pessoasRouter