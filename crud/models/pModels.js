//CAPTAÇÃO GERAL - FUNÇÃO INICIAL EM PROMISE QUE FAZ A CAPTAÇÃO DO CONTEUDO DE FORMA GERAL DO BANCO DE DADOS E EXPORTA PARA 'CONNECTION'
const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas', (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }            
        })
    })    
}

//DELETE
const deleteOneM = (connection, id) => {
    return new Promise((resolve, reject) => {
        //DELETE FROM PESSOAS - QUANDO SE QUER DELETAR ALGUM DADOS NO BANCO DE DADOS
        connection.query(`DELETE FROM pessoas WHERE id = ${id} LIMIT 1`, (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

//INSERIR UMA PESSOA NO FORMULÁRIO CONFORME SOLICITAÇÃO DOS ITENS DESEJADOS
const createPessoa = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO pessoas (nome, nascimento, cargo) VALUES ('${data.nome}', '${data.nascimento}', '${data.cargo}')`), (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        } 
    })
}


//CAPTAÇÃO GERAL DOS DADOS PARA USO NO FORMULÁRIO
const findById = (connection, id) => {
    return new Promise((resolve, reject) => {        
        connection.query(`SELECT * FROM pessoas WHERE id = ${id}`, (err, results) => {
            if(err){
                reject(err)            
            }else{
                if(results.length>0){
                    resolve(results[0])
                }else{
                resolve({})
                }
            }            
        })          
    })    
}
//ATUALIZAÇÃO DOS DADOS - UPDATE
const updatePessoa = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE pessoas SET nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' WHERE id =${id}`), (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        } 
    })
}

module.exports = {
    findAll,
    findById,
    deleteOneM,
    createPessoa,
    updatePessoa
        
}