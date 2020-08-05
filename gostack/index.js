const express = require('express');
const app = express();
app.use(express.json())


const users = ['Eldo', 'Aline', 'Arthur', 'Iris'] 

//MIDDLEWARE GLOBAL - LOG DE ALGUNS PARÂMETROS
app.use((req, res, next) => {
    console.time('Request')
    console.log(`Método: ${req.method}, URL: ${req.url}`)
    next()
    console.timeEnd('Request')
})

//MIDDLEWARE LOCAL - CHECK DE PARÂMETROS 
const checkUserExist = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).json({ error: 'User name is required'})
    }
    return next()
}

const checkUsersInData = (req, res, next) => {    
    const user = users[req.params.id]
    if(!user){
        return res.status(400).json({ error: 'User does not exist'})
    }    
    req.user = user        
    return next()
}

//ALL USERS
app.get('/users', (req, res) => {
    return res.json(users)
})

//QUERY = ?rota=nome_da_rota
app.get('/rota', (req, res) => {
    const rota = req.query.nomedarota
    return res.json({ rota: `${rota}` })
})

//ROUTE PARAMS 
app.get('/get/:key', checkUsersInData, (req, res) => {
    const key = req.params.key
    //const { key } = req.params
    //res.json({Usuário: `${users[key]}`})
    return res.send(`<h1>Será enviado o usuário '${users[key]}' conforne a localização da key dentro do array</h1>`)
})

//CRUD: CREATE
app.post('/users', checkUserExist, (req, res) => {
    const {name} = req.body
    users.push(name)

    return res.json(users)
})

//CRUD: READ
//ROUTE PARAMS = /users/número do id
app.get('/users/:id', checkUsersInData, (req, res) => {
    //const id = req.params.id
    const { id } = req.params //desestruturação - buscando o id
    //return res.send(`<h1>Buscando o id: ${id}, com o usuário:  ${users[id]}</h1>`)
    return res.send(`<h1>Buscando o id: ${id} no array onde o usuário é:  ${req.user}</h1>`)
})

//CRUD: UPDATE
app.put('/users/:id', checkUserExist, checkUsersInData, (req, res) => {
    const { id } = req.params
    const { name } = req.body    
    users[id] = name
    return res.json(users)
})

//CRUD: DELETE
app.delete('/users/:id', checkUsersInData, (req, res) => {
    const { id } = req.params
    users.splice(id, 1)
    //return res.json(users)
    return res.send()
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on PORT: ${port}`));