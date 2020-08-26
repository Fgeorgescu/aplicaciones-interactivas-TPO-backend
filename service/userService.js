// Gettign the Newly created Mongoose Model we just created 
const users = require('../models').users;
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        var _details = await User.findOne({
            email: user.email
        });
        var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
        if (!passwordIsValid) throw Error("Invalid username/password")

        var token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}