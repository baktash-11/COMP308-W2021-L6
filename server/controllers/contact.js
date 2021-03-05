
let express = require('express');
let router =express.Router();
let contactModel =require('../models/contact')

//Get Contact list page - READ Operation
module.exports. displayContactList=(req, res, next) => {
    contactModel.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            //will print the contact list in console 
           // console.log(contactList);
            
                res.render('contact/index',{
                    title: 'Contact List', 
                    //save the data in the object contact list
                    contactList: contactList
                });
            
        }
    });
};
//display add page
module.exports.dispayAddpage= (req, res, next)=>{
    //render view under contact add.ejs
    res.render('contact/add', {
        title: 'Add New Contact'
    });
};

//add route for process (POST METHOD) the add page 
module.exports.processAdd=(req, res, next) => {
    console.log(req.body);
    let newContact = contactModel({
        "fName": req.body.fName,
        "lName": req.body.lName,
        "age": req.body.age
    });

    contactModel.create(newContact, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
    //nazif's method 
    /* const newContact = new contactModel(req.body);
    newContact.save()
        .then((result)=>{
            res.redirect('/contact-list');
           console.log(result);
        })
        .catch((err) => {console.log(err)}) */
    

};
//diplay edit page
module.exports. diaplayEditPage=(req, res, next)=>{
    let id =req.params.id;
    contactModel.findById(id, (err, contactObject)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //sow edit page
           res.render('contact/edit', {
            title: 'Edit Contact', 
               contact: contactObject
           });

            
        }
            
    });
    console.log(id);
};

module.exports.processEditPage=(req, res, next)=>{
    let id = req.params.id;
    let updatedContact = contactModel({
        "_id": id, 
        "fName": req.body.fName, 
        "lName": req.body.lName,
        "age":req.body.age
    });
    contactModel.update({_id:id}, updatedContact, (err)=>{
        if(err){
            console.log(err)
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
};

module.exports.performDelete =(req, res, next)=>{
    let id= req.params.id;
    contactModel.remove({_id:id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
}

