const Sequelide = require('sequelize');
const historias = require('../models').historias;
const empleados = require('../models').empleados;

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
        const responseUser = empleados.findOne({
            where: {
                username: req.params.id
            }
        })

        const responseHistoria = historias.findOne({
            where: {
                username: req.params.id
            }
        })

        Promise.all([responseUser, responseHistoria])
            .then(responses => {
                //uno ambos jsons; 
                res
                    .status(200)
                    .send({
                        ...responses[1].historia,
                        ...responses[0].dataValues
                    })//.dataValues nos da los valores, si no incluye la metadata
            }).catch(error => res.status(400).send(error))
    }
}