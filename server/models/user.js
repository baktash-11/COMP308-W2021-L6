//requre modules for our user model 
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
        username: {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /* password: {
            type:String,
            default:'',
            trim: true, 
            required: 'password is required'
        }    */
        email: {
            type: String,
            default: '',
            trim: true,
            required: 'email is required',
        },
        displayName: {
            default: '',
            trim: true,
            required: 'name is required',
        },
        created: {
            type: Date,
            default: Date.now
        },
        update: {
            type: Date,
            default: Date.now
        }
    }, {
        collection: 'user'
    }

);
//confiugre options for the userSchema
let options=({
    missingPasswordError:'Wrong / Missing Password'
});
userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);