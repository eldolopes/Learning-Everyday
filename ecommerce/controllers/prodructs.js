const productsModels = require('../models/products');

const getProducts = db =>  async(req, res) => {
    const oneProductById = await productsModels.getOneProductById(db)(req.params.id)
    res.render('produto-detalhado', {
        oneProductById
    })
}

module.exports = {
    getProducts
}