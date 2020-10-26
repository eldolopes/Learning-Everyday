const axios = require('axios')
const url = 'https://covid19-brazil-api.now.sh/api/report/v1'

axios.get(url).then( res => {
    const data = res.data.data
    const express = require('express')
    const app = express()
    const maiorMortes = (atual, acumulado) => {
        return atual.deaths > acumulado.deaths ? atual : acumulado
    }
    const menorMortes = (atual, acumulado) => {
        return atual.deaths < acumulado.deaths ? atual : acumulado
    }    
    const maisMortes = JSON.stringify(data.reduce(maiorMortes))
    const menosMortes = JSON.stringify(data.reduce(menorMortes))
    const maiorMenor = maisMortes.concat(menosMortes)

    app.get('/', (req, res) => {
        res.send(maiorMenor)
    })    

    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(`localhost:${port}`))      
})

