const http = require('http')
const port = process.env.PORT || 3333
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    //res.write('<h1>Hello, World!')
    //
    if(req.url == '/'){
        res.write('<h1>Home</h1>')
    }else if(req.url =='/bemvindo'){
        res.write('<h1>Bem-Vindo!</h1>')
    }else{
        res.write('<h1>ERRO! Caminho Inexistente</h1>')
    }
    res.end()
})
server.listen(port, () => console.log(`Servidor online: http://localhost:${port}`))