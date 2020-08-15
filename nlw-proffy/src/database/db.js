const sqlite = require('sqlite-sync')
sqlite.connect(__dirname + "/database.sqlite")

const createProffy = require('./createProffy')

const createDatabase = () => {     
    const database = sqlite.run(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `, function(res){
        if(res.error)
            throw res.error
        console.log(res)
    })

    return database
}

const getAllProffys = () => {
    const allProffys = sqlite.run(`SELECT * FROM proffys`)
    return allProffys    
}

const getAllClasses = () => {
    const allClasses = sqlite.run(`SELECT * FROM classes`)
    return allClasses
}

const insertProffy = () => {
    const idProffy = sqlite.insert('proffys',{
        name: "Amor da Vida", 
        avatar: "https://avatars2.githubusercontent.com/u/5180488?s=460&u=bbbf04a7c56a141f487989a36123334f95ead4ca&v=4", 
        whatsapp: "27997886095", 
        bio: "Testando" 
    })
    return idProffy
}

const insertClasse = () => {
    const idClasse = sqlite.insert('classes',{
        subject: "Portugês", 
        cost: "100" 
    })
    return idClasse
}

const insertClasseSchedule = () => 
    {
    const idSchedule = sqlite.insert('class_schedule',[
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1200 
        },
        {
            weekday: 1, 
            time_from: 870, 
            time_to: 2200 
            }
    ])
    return idSchedule
}
//createDatabase()
//insertProffy()
//insertClasse()
//SinsertClasseSchedule()

//console.log()

module.exports = {
    createDatabase,
    getAllProffys,
    getAllClasses
}