const newsRouter = require('./news')
const siteRoter = require('./site')
const courseRoter = require('./courses')

function route(app) {

    app.use('/news', newsRouter);
    app.use('/courses', courseRoter)
    app.use('/', siteRoter);
}

module.exports = route;