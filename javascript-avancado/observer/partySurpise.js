const readline = require('readline')

const getAnswer = ask => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(ask, answer => {
            resolve(answer)
            rl.close()
        })
    })
}

const girlfriend = () => {
    console.log('\nNamorada: Apagar as luzes.')
    console.log('\nNamorada: Silêncio!')
    console.log('\nNamorada: Surpresa!!!')    
}

const union = () => {
    console.log('\nSindico: Monitorando o barulho.\n')
}

const concierge = async (...observers) => {
    while(true) {
        const answer = await getAnswer('O namorado chegou? (s/N/q): ')
        if(answer.toLowerCase() === 's') {
            (observers || []).forEach(obs => obs())
        } else if (answer.toLowerCase() === 'q') {
            break
        }
    }    
}

concierge(girlfriend, union)