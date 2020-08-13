const allTeachersModels = require('../models/teachers')
const allCourses = require('./courses')
const weekdays = require('./weekdays')


const teachers = db  => async(req, res) => {
    const allFilters = await allTeachersModels.getAllFilters(req)()
    const allTeachers = await allTeachersModels.getAllTeachers(db)()
    res.render('study', {
        allTeachers,
        allFilters,
        allCourses,
        weekdays
    })
    //console.log(`AllTeachers ${{nome: allTeachers}}`)
    //console.log(allTeachers)
    //console.log(`AllFilters / Subject = ${allFilters.subject}`)
    //console.log(allFilters)
    //console.log(`AllCourses / Courses = ${allCourses.courses}`)
    //console.log(allCourses)
    //console.log(weekdays)
}

const giveClasses = () => (req, res) => {
    return res.render('give-classes', {
        allCourses,
        weekdays
    })
}

const createTeachers = () => async(db, req, res) => {     
        await allTeachersModels.createTeachers(db, req.query)
        return res.redirect('/study') 
        
}

module.exports = {
    teachers,
    giveClasses,
    createTeachers
}