const Sequelide =require('sequelize');
const users = require('../models').users;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        console.log("Acá creamos al ususario");
        // return users
        //     .create({
        //         username: req.body.username,
        //         email: req.body.email,
        //         status: req.body.status
        //     })
        //     .then(users => res.status(201).send(users))
        //     .catch(error => res.staus(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, resp) {
        console.log("Buscando clientes")
    },

    /**
     * Get user por DNI
     */
    getUserByDNI(req, res) {
        res.status(200).json( {
            user_id: req.params.id,
            dni: 38427075,
            username: "fgeorgescu",
            mail: "fgeorgescu@uade.edu.ar",
            fecha_nacimiento: "30/06/1994"
        });
    }
}