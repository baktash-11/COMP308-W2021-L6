
let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');
let contactController = require('../controllers/contact');



//create a reference to the database schema 
let contactModel =require('../models/contact')

//GET Contact List page - Red opration 
router.get('/', contactController.displayContactList);

//router for the add page (render the page)
//GET Route for add pagee 
router.get('/add',contactController.dispayAddpage);


//add route for process (POST METHOD) the add page 
router.post('/add',contactController.processAdd);

//GET request to show Edit page 
router.get('/edit/:id',contactController.diaplayEditPage);

// post req - update the database with data from database
router.post('/edit/:id', contactController.processEditPage);
//get request to delete 
router.get('/delete/:id', contactController.performDelete);


module.exports = router;

