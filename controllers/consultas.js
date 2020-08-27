const Sequelide = require('sequelize');
const consultas = require('../models').consultas;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    add(req, res) {
        //TODO: Validar que exista el ususario
        return consultas
            .findOrCreate({
                where: {
                    username: req.params.id,
                }
            })
            .then((test) => {
                console.log(test[0])
                if (test[0].consultas === undefined || test[0].consultas === null) {
                    test[0].consultas = [req.body];
                } else {
                    test[0].consultas = [...test[0].consultas, req.body]
                }
                test[0].save()
                res.status(201).send(test[0].consultas)
            })
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    },

    /**
     * Buscar por id
     */
    findAll(req, res) {
        return consultas
            .findOne({
                where: {
                    username: req.params.id,
                }
            })
            .then(consultas => {
                consultas ? res.status(200).send(consultas.consultas) : res.status(404).send({message: "Not found"});
            }) 
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    }
}