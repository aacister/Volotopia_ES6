var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('passport');
var moment = require('moment-timezone');
var flash    = require('connect-flash');
var session      = require('express-session');

moment().tz("America/New_York").format();
mongoose.set('debug', true);
mongoose.connect('mongodb://aacister:password123@ds015760.mlab.com:15760/heroku_8kqk50d6', function(err){
  if(err) throw err;
});
/*mongoose.connect('mongodb://localhost/Volotopia', function(err) {
    if (err) throw err;
});
*/


require('./models/Airlines');
require('./models/Comments');
require('./models/Airports');
require('./models/Routes');
require('./models/Users');
require('./config/passport');

var routes = require('./routes/index');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, './src/js/views'));
//app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;