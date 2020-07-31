const express =require('express');
const path = require('path');
const app = express();

const homeControllers = require('./controllers/home')
const categoriesModels = require('./models/categories');

const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')

//PORT
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

//QUERY TEST
db.on('query', query => {
    console.log(`SQL: ${query.sql}`)
});

//VIEWS ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARE
app.use(async(req, res, next) => {
    const allCategoriesWithSlug = await categoriesModels.getAllCategoriesWithSlug(db)()
    res.locals = {
        allCategoriesWithSlug
    }
    next()
});

//RENDER
app.get('/', homeControllers.getIndex(db));
app.use(categoriesRoutes(db))
app.use(productsRoutes(db))
app.use(express.static('public'));

//LISTEN
app.listen(port, err => {
    if(err){
        console.log('Erro ao iniciar: ', err)
    }else{
        console.log(`Server online: http://localhost:${port}`)
    }
});
