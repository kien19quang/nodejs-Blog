const Course = require('../Models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')


class NewsController {



    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/store-courses', {
                    deletedCount: deletedCount ? deletedCount : 0,
                    courses: multipleMongooseToObject(courses)
                })
            )
            .catch(next)

        Course.countDocumentsDeleted()
            .then((deletedCount) => {

            })
            .catch(() => { })

        Course.find({})
            .then((courses) => { })
            .catch(next)

    }


    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)

    }

}


module.exports = new NewsController