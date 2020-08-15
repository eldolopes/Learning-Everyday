const allTeachersModels = require('../models/teachers')
const allCourses = require('../src/database/courses')
const weekdays = require('../public/utils/weekdays')
const database = require('../src/database/db')
//console.log("Testando", proffys)

const teachers = ()  => (req, res) => {
    const allFilters = allTeachersModels.getAllFilters(req)()
    const allProffys = database.getAllProffys()
    const allClasses = database.getAllClasses()
    //const allTeachers =  allTeachersModels.proffys
    res.render('study', {
        allProffys,
        allClasses,
        allFilters,
        allCourses,
        weekdays
    })
    console.log("Todos os cursos", allClasses)
}

const giveClasses = () => (req, res) => {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){
        const changeCoursesOnPosition = require('../public/scripts/changeCoursesOnPosition')
        data.subject = changeCoursesOnPosition(data.subject)
        allTeachersModels.proffys.push(data)
        return res.redirect("/study")
    }

    return res.render('give-classes', {
        allCourses,
        weekdays
    })
}

module.exports = {
    teachers,
    giveClasses
}