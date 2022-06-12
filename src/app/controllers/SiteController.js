const Course = require('../Models/Course')


class SiteController {

    // [GET] /
    home(req, res) {

        Course.find({}, (err, courses) => {
            if (!err) {
                return res.json(courses);
            }
            return res.status(400).json({
                error: 'Error!!!'
            });
        })

    }

    // [GET] /search
    search(req, res) {
        res.send('Search Detail!')
    }

}


module.exports = new SiteController