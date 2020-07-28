const express =require('express');
const path = require('path');
const app = express();
const slug = require('./utils/slug');

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
//HOME.EJS
app.get('/', async(req, res) => {  
    const allCategories = await db('categories').select('*');    
    const allCategoriesWithSlug = allCategories.map( listCategory => {
        const newCategoryToSlug = {...listCategory, toSlug: slug(listCategory.category)}
        return newCategoryToSlug        
    });
    const allProducts = await db('products').select('*')
    //console.log(allCategories)
    //console.log(allCategoriesWithSlug)
    res.render('home', {
        allCategories: allCategoriesWithSlug,
        allProducts
    });
    //console.log(allProducts)
});
//CATEGORIAS.EJS
app.get('/categories/:id/:toSlug', async(req, res) => {
    const allCategories = await db('categories').select('*')
    const allCategoriesWithSlug = allCategories.map( listCategory => {
        const newCategoryToSlug = {...listCategory, toSlug: slug(listCategory.category)}
        return newCategoryToSlug
    });
    const allProducts = await db('products').select('*')
    .where('id', function () {
        this
        .select('categories_products.products_id')
        .from('categories_products')
        .whereRaw('categories_products.products_id = products.id')
        .where('categories_id', req.params.id)
    });
    const onlyOneCategory = await db('categories').select('*').where('id', req.params.id)
    //console.log(onlyCategory)
    //res.send(products)
    res.render('categories', {
        allCategories: allCategoriesWithSlug,
        allProducts,
        onlyOneCategory
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
