const Sequelide = require('sequelize');
const historias = require('../models').historias;
const users = require('../models').users;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        //TODO: Validar que exista el ususario
        console.log(req.params)
        return historias
            .create({
                username: req.params.id,
                historia: req.body
            })
            .then(historias => res.status(201).send(historias.historia))
            .catch(error => res.status(400).send(error))
    },


    update(req, res) {        
        return historias
            .findOne({
                username: req.params.id,
            })
            .then(historias => {
                historias.historia = req.body
                historias.save()
                res.status(200).send(historias.historia)
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        return historias
            .findOne({
                username: req.params.id,
            })
            .then(historias => {
                res.status(200).send(historias.historia)
            })
            .catch(error => res.status(400).send(error))
    }
}