const Knex = require('knex')

//PROCEDIMENTO PARA CONEXÃO COM O KNEX ADMINISTRANDO
const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'knex'
    }
})

const execute = async() => {
    console.log('Operate with Knex')

    //INSERT
    await db('pessoas')
        .insert({
            id: '3',
            nome: 'Eldo Lopes'
    })  

    //QUERY - BUSCA DOS DADOS
    const pessoas = await db('pessoas').select('*')
    console.log(pessoas)

    //UPDATE
    //await db('pessoas').where({id: 3}).update({nome:'Eldo Lopes'})

    //DELETE
    //await db('pessoas').where({id:20}).del()    
}

execute()


