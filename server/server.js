var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan')
var cors = require('cors')
//if (process.env.NODE_ENV !== 'production') require('/secret')
//var index = require('./routes/index');
var notes = require('./routes/notes');

var app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'client')));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs')
// app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'))

//app.use('/', index);
app.use('/api', notes);


var PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server Listen on port ${PORT}!`)
})
