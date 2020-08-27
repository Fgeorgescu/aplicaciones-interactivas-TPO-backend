const Sequelide = require('sequelize');
const medicamentos = require('../models').medicamentos;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    add(req, res) {
        //TODO: Validar que exista el ususario
        return medicamentos
            .findOrCreate({
                where: {
                    username: req.params.id,
                }
            })
            .then((test) => {
                console.log(test[0])
                if (test[0].medicamentos === undefined || test[0].medicamentos === null) {
                    test[0].medicamentos = [req.body];
                } else {
                    test[0].medicamentos = [...test[0].medicamentos, req.body]
                }
                test[0].save()
                res.status(201).send(test[0].medicamentos)
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
        return medicamentos
            .findOne({
                where: {
                    username: req.params.id,
                }
            })
            .then(medicamentos => {
                medicamentos ? res.status(200).send(medicamentos.medicamentos) : res.status(404).send({message: "Not found"});
            })
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    },
    
    update(req, res) {
        return medicamentos
            .findOne({
                where: {
                    username: req.params.id,
                }
            })
            .then(medicamentos => {
                console.log(medicamentos)
                res.status(200).send(medicamentos.medicamentos)
            })
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    }
}