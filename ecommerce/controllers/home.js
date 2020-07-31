const productsModels = require('../models/products');

const getIndex =  db => async(req, res) => { 
    const allProductsStandard = await productsModels.getAllProductsStandard(db)()    
    res.render('home', {        
        allProductsStandard
    })
};

module.exports = {
    getIndex
}