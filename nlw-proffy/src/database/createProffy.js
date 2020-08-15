const sqlite = require('sqlite-sync')
const createProffy = async() => {
    const proffy = await sqlite.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsaspp,
            bio
        ) VALUES (
            ${insertProffy.name},
            ${insertProffy.avatar},
            ${insertProffy.whatsapp},
            ${insertProffy.bio}
        );
    `)    
    const proffy_id = proffy.lastID

    const classe = await sqlite.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            ${insertClasse.subject},
            ${insertClasse.cost},
            ${proffy_id}
        );
    `)
    const classe_id = classe.lastID

    const insertAllClassesScheduleValues = insertClasseSchedule.map((value) => {        
        return sqlite.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to                
            ) VALUES (
                ${classe_id},
                ${value.weekday},
                ${value.time_from},
                ${value.time_to}                
            );
        `)
    })
    await Promise.all(insertAllClassesScheduleValues)
}

module.exports = createProffy