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

// Get - display longin page 
router.get('/login', indexController.displayLoginPage);

//POST - processes the long in page 
router.post('/login', indexController.displayLoginPage);

// GET -display the User Registration page 
router.get('/register', indexController.displayRegisterPage);

// POST - processes the User Registration Page 
router.post('/register', indexController.processRegistePage);

//GET - Perform user logout 
router.get('/logout', indexController.performLogout);
module.exports = router;
