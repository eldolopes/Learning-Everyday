const express = require('express')
const app = express()
const path = require('path')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src'))

app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/study', (req, res) => {
    return res.render('study')
})

app.get('/give-classes', (req, res) => {
    return res.render('give-classes')
})

app.use(express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server online: http://localhost:${port}`))