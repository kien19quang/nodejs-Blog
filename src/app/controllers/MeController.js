const Course = require('../Models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')


class NewsController {



    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        let courseQuery = Course.find({})
        if (res.locals._sort.enabled) {
            courseQuery = courseQuery.sort({
                [res.locals._sort.column]: res.locals._sort.type
            })
        }


        Promise.all([courseQuery, Course.countDocumentsDeleted()])
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