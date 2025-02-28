const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const db = require('./config/db');
//connect to db
db.connect();
const app = express();
const port = 3000;

const route = require('./routes');

// static file
app.use(express.static(path.join(__dirname, 'public')));

//Http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// route

route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
