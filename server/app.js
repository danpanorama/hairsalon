var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentRouter = require('./routes/comment');


var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "jsx");
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comment', commentRouter);





app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname,"../", '/public_html/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

module.exports = app;
