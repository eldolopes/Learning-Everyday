const getAllTeachers = db => async() => {
    const findAll = await db('teachers').select('*')
    return findAll 
}

const getAllFilters = req => async() => {
    const allFilters = await req.query    
    return allFilters
} 

const createTeachers = (db, data) => async() => {
    const teacher = await db('teachers')
        .insert([
            data.name, 
            data.avatar, 
            data.whatsapp, 
            data.bio, 
            data.cost, 
            data.subject, 
            data.weekday, 
            data.time_from, 
            data.time_to
        ])
    return teacher
}
module.exports = {
    getAllTeachers,
    getAllFilters,
    createTeachers
}