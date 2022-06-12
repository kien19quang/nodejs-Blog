const newsRouter = require('./news')
const siteRoter = require('./site')

function route(app) {

    app.use('/news', newsRouter);
    app.use('/', siteRoter);
}

module.exports = route;