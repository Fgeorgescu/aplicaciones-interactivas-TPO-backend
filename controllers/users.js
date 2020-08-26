const Sequelide = require('sequelize');
const users = require('../models').user;
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        console.log("Acá creamos al ususario");
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        console.log(req.body.password)
        console.log(hashedPassword)
        return users
            .create({
                username: req.body.username,
                mail: req.body.email,
                password: hashedPassword
            })
            .then(users => {
                var token = jwt.sign({
                    id: users.id
                }, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(201).send({ token: token })
            })
            .catch(error => res.staus(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, resp) {
        console.log("Buscando clientes")
        resp.status(200).json({message: "tenemos clientes"})
    },

    /**
     * Get user por DNI
     */
    getUserByDNI(req, res) {
        res.status(200).json({
            user_id: req.params.id,
            dni: 38427075,
            username: "fgeorgescu",
            mail: "fgeorgescu@uade.edu.ar",
            fecha_nacimiento: "30/06/1994"
        });
    },

    loginUser(req, res, next) {
        // Req.Body contains the form submit values.
        var user = {
            email: req.body.email,
            password: req.body.password
        }
        var loginUser;
        // Calling the Service function with the new object from the Request Body
        // Find the User 
        users.findOne({
            email: user.email
        }).then( userDetails => {
            console.log("Encontramos el usuario para el login")
            console.log(userDetails)
            var passwordIsValid = bcrypt.compareSync(user.password, userDetails.password);
            if (!passwordIsValid) return res.status(400).json({ status: 400, message: "Invalid username or password" })
    
            var token = jwt.sign({
                id: userDetails.id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            loginUser = token;
            return res.status(201).json({ token: loginUser, message: "Succesfully login" })
        
        })
        .catch(error => res.stauts(401).send(error))
    }
}