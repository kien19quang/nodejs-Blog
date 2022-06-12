const express = require('express');
const engine = require('express-handlebars');
const port = 3001;
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/web');
const db = require('./config/db')


// Connect to DB
db.connect()


const app = express();



// HTTP logger
//app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))


// Routes init
route(app);




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})