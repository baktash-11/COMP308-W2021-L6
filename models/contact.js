
let mongoose = require('mongoose');

//create a model class 
let contactSchema = mongoose.Schema({
    fName: String,
    lName: String,
    age: Number

},
    //creating a collection 
{

    collection:"first"
});

module.exports = mongoose.model('contact', contactSchema);

//