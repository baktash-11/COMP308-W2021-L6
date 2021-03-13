let express = require('express');
let router = express.Router();

module.exports .displayHomePage=(req, res, next)=> {
    //gose to index and inject the title into index.ejs
    res.render('index', { title: 'Home' });
};

module.exports.displayAboutPage=(req, res, next)=> {
    //gose to index and inject the title into index.ejs
    res.render('index', { title: 'About' });

};

module.exports.displayProductPage=(req, res, next)=> {
    //gose to index and inject the title into index.ejs
    res.render('index', { title: 'Products' });
};

module.exports.displayContactPage= (req, res, next)=> {
    //gose to index and inject the title into index.ejs
    res.render('index', { title: 'Contact' });
};
module.exports.displayServicesPage=(req, res, next)=> {
    //gose to index and inject the title into index.ejs
    res.render('index', { title: 'Services' });
};

module.exports.displayLoginPage=(req, res, next)=>{
    //TDO
}
module.exports.processLoginPage=(req, res, next)=>{
    //TDO
}
module.exports.displayRegisterPage=(req, res, next)=>{
    //TDO
}
module.exports.processRegistePage=(req, res, next)=>{
    //TDO
}
module.exports.performLogout=(req, res, next)=>{
    //TDO
}

