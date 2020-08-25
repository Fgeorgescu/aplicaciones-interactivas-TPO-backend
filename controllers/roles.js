const Sequelide =require('sequelize');
const roles = require('../models').roles;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        return roles
            .create({
                rol: req.body.rol,
            })
            .then(roles => res.status(201).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, res) {
        console.log("Listamos las especialidades")
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        console.log(`Buscamos por ID: ${req.params.id}`)
        return roles
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    }
}