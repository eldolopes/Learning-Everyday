const express = require('express')
const pessoasController = require('../controllers/pControllers')


//CRIA UMA FUNÇÃO  QUE RETORNA O OBJETO 'CONNECTION' COM O CONTEUDO EXTRAIDO DO BANCO DE DADOS - CADASTRO:  'PESSOAS'
const pessoasRouter = ({ connection }) => {    
    //NESSE CASO, ESTÁ SENDO USADO NO 'INDEX' E SENDO RENDERIZADO PELO 'HOME'
    const router = express.Router()
    
    //RECEBE OS DADOS DE 'PESSOAS' E RETORNA O CONTEUDO PARA A FUNÇÃO 'PESSOASROUTER'
    router.get('/', pessoasController.index.bind(null, connection))
     
    
    const deleteUser = '/delete/:id'
    router.get(deleteUser, pessoasController.deleteOneC.bind(null, connection))

    const createUser = '/create'
    router.get(createUser, pessoasController.createForm)
    router.post(createUser, pessoasController.createProcess.bind(null, connection))

    const updateUser = '/update/:id'
    router.get(updateUser, pessoasController.updateForm.bind(null, connection))    
    router.post(updateUser, pessoasController.updateProcess.bind(null, connection))

    return router
}  

module.exports = pessoasRouter