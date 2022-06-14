const Course = require('../Models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    // [GET] /Course/:slug
    show(req, res, next) {

        Course.findOne({
            slug: req.params.slug
        })
            .then(course => res.render('courses/show', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }

    // [GET] /Course/create
    create(req, res, next) {

        res.render('courses/create')

    }

    // [POST] /Course/store
    store(req, res, next) {

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))


    }


}


module.exports = new CourseController