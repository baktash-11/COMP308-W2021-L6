let express = require('express');
let router = express.Router();

// GET home page.
router.get('/', function (req, res, next) {
  //gose to index and inject the title into index.ejs
  res.render('index', { title: 'Home' });
});


// GET home page.
router.get('/about', function (req, res, next) {
  //gose to index and inject the title into index.ejs
  res.render('index', { title: 'About' });
});

// GET products page.
router.get('/products', function (req, res, next) {
  //gose to index and inject the title into index.ejs
  res.render('index', { title: 'Products' });
});

// GET services page.
router.get('/services', function (req, res, next) {
  //gose to index and inject the title into index.ejs
  res.render('index', { title: 'Services' });
});

// GET contact page.
router.get('/contact', function (req, res, next) {
  //gose to index and inject the title into index.ejs
  res.render('index', { title: 'Contact' });
});


module.exports = router;
