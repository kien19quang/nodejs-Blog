const Course = require('../Models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    // [GET] /
    home(req, res, next) {

        Course.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses);

                res.render('home', { courses })
            })
            .catch(next)

    }

    // [GET] /search
    search(req, res) {
        res.send('Search Detail!')
    }

}


module.exports = new SiteController