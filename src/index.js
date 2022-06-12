const express = require('express');
const engine = require('express-handlebars');
const port = 3001;
const morgan = require('morgan');
const path = require('path');

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
app.set('views', path.join(__dirname, 'resources/views'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})