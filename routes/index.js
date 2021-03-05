let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

// GET home page.
router.get('/', indexController.displayHomePage);


// GET About page page.
router.get('/about',indexController.displayAboutPage);

// GET products page.
router.get('/products',indexController.displayProductPage );

// GET services page.
router.get('/services', indexController.displayServicesPage );

// GET contact page.
router.get('/contact',indexController.displayContactPage);


module.exports = router;
