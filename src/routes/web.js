const newsRouter = require('./news')
const siteRoter = require('./site')
const courseRoter = require('./courses')
const meRoter = require('./me')

function route(app) {

    app.use('/news', newsRouter);
    app.use('/courses', courseRoter);
    app.use('/me', meRoter);
    app.use('/', siteRoter);
}

module.exports = route;