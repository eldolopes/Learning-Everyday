const express =require('express');
const path = require('path');
const app = express();

const categoryModels = require('./Models/category');
const productsModels = require('./Models/products');

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

//MIDDLEWARE
app.use(async(req, res, next) => {
    const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    res.locals = {
        allCategoriesWithSlug
    }
    next()
});

app.get('/', async(req, res) => {  
    //const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    const allProductsStandard = await productsModels.getAllProductsStandard(db)()
    //console.log(allCategories)
    //console.log(allCategoriesWithSlug)
    res.render('home', {
        //allCategoriesWithSlug,
        allProductsStandard
    })
    //console.log(allProducts)
});

app.get('/categoria/:id/:toSlug', async(req, res) => {
    //const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    const allProductsByCategoryId = await productsModels.getAllProductsByCategoryId(db)(req.params.id)
    const oneCategoryById = await categoryModels.getOneCategoryById(db)(req.params.id)
    //console.log(onlyCategory)
    //res.send(products)
    res.render('categoria', {
        //allCategoriesWithSlug,//: allCategoriesWithSlug,
        allProductsByCategoryId,
        oneCategoryById
    })
});

app.get('/produto/:id/:toSlug', async(req, res) => {
    //const allCategoriesWithSlug = await categoryModels.getAllCategoriesWithSlug(db)()
    const oneProductById = await productsModels.getOneProductById(db)(req.params.id)
    res.render('produto-detalhado', {
        //allCategoriesWithSlug,
        oneProductById
    })
});

app.use(express.static('public'));

app.listen(port, err => {
    if(err){
        console.log('Erro ao iniciar: ', err)
    }else{
        console.log(`Server online: http://localhost:${port}`)
    }
});
