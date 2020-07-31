const init = db => {
    const productsControllers = require('../controllers/prodructs')
    const router = require('express').Router()
    router.get('/produto/:id/:toSlug', productsControllers.getProducts(db))
    return router
}

module.exports = init