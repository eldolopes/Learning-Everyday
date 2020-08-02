const express = require('express');
const app = express();

//QUERY = ?rota=nome da rota
app.get('/rota', (req, res) => {
    const rota = req.query.nomedarota
res.json({ rota: `${rota}` })
})

//ROUTE PARAMS = /users/número do id
app.get('/users/:id', (req, res) => {
    //const id = req.params.id
    const { id } = req.params //desestruturação- buscando o id
     res.send(`<h1>Buscando o id ${id}</h1>`)
})

//ROUTE PARAMS 
const users = ['Eldo', 'Aline', 'Arthur', 'Iris'] 
app.get('/get/:key', (req, res) => {
    const key = req.params.key
    //const { key } = req.params
    //res.json({Usuário: `${users[key]}`})
    res.send(`<h1>Será enviado o usuário '${users[key]}'conforne a localização da key dentro do array</h1>`)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on PORT: ${port}`));