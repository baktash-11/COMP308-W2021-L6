
//modules for node and express ------------------------------
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//modules foor authentication 
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


//Database setup --------------------------------------------------------
let mongoose = require('mongoose');
let DB = require('./db');
//point Mongoose to the db URI
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection; 
//well send error to console if in case of any error 
mongoDB.on('error', console.error.bind(console, 'Connection Error'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDb...');
})
//-------------------------------------------------------------------------

//requires(imports) routes index 
let indexRouter = require('../routes/index');
//define our contact route
let contactRouter = require('../routes/contact');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express-session ------------------------------ express-session
app.use(session({
  secret: "SomeSecret", 
  resave: false,
  saveUninitialized: false,
}));

//initialize flash 
app.use(flash());

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

//initialize user configuration

//create a user model 
let userModel = require('../models/user');
let User = userModel.User;

//implement a user authentication strategy 
passport.use(User.createStrategy());

//serialize and deserialize the user info(binary conversion)
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/contact-list', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
