const express = require('express')
const router = express.Router()

const teachersControllers = require('../controllers/teachers')

const init = db => {
    router.get('/', (req, res) => {
        return res.render('index')
    })
    router.get('/study', teachersControllers.teachers(db))

    router.get('/give-classes', teachersControllers.giveClasses())
    router.post('/give-classes', teachersControllers.createTeachers.bind(null, db))
    
    return router
}


module.exports = init