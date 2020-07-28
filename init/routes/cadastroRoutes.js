const express = require('express')

const cadatroRouter = () => {
    const route = express.Router()
    route.get('/', index.bind(null))
    return route
}

const index = (req, res) => {
    res.render('cadastro/index')
}

module.exports = cadatroRouter
