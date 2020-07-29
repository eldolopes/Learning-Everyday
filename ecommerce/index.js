const express =require('express');
const path = require('path');
const app = express();

const categoryModels = require('./Models/category')
const productsModels = require('./Models/products')

const port = process.env.PORT || 3000;
//DB COM KNEX
const db = require('knex') ({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'myecommerce'
    }
});
//TESTE DE QUERY
db.on('query', query => {
    console.log(`SQL: ${query.sql}`)
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async(req, res) => {  
    const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    const allProductsStandard = await productsModels.getAllProductsStandard(db)()
    //console.log(allCategories)
    //console.log(allCategoriesWithSlug)
    res.render('home', {
        allCategoriesWithSlug, //: allCategoriesWithSlug,
        allProductsStandard
    })
    //console.log(allProducts)
});

app.get('/categories/:id/:toSlug', async(req, res) => {
    const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    const allProductsByCategoryId = await productsModels.getAllProductsByCategoryId(db)(req.params.id)
    const oneCategoryById = await categoryModels.getOneCategoryById(db)(req.params.id)
    //console.log(onlyCategory)
    //res.send(products)
    res.render('categories', {
        allCategoriesWithSlug,//: allCategoriesWithSlug,
        allProductsByCategoryId,
        oneCategoryById
    });
});

app.use(express.static('public'));

app.listen(port, err => {
    if(err){
        console.log('Erro ao iniciar: ', err)
    }else{
        console.log(`Server online: http://localhost:${port}`)
    }
});
