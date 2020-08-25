const Sequelide =require('sequelize');
const rol = require('../models').rol;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        return rol
            .create({
                rol: req.body.rol,
            })
            .then(rol => res.status(201).send(rol))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, res) {
        console.log("Listamos las especialidades")
        return rol
            .findAll({})
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        console.log(`Buscamos por ID: ${req.params.id}`)
        return rol
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    }
}