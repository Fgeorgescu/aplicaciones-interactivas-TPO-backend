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
                where:{
                    username: req.params.id,
                }
            })
            .then((consultas) => {
                
                    console.log("!created")
                    var prueba = [...consultas.consulta, req.body]
                    console.log(prueba)
                    if (consultas.consulta === null) {
                        console.log("null")

                        consultas.consulta = [req.body];

                    } else {
                        console.log("!null")

                        consultas.consulta.add(req.body)
                    }
                    consultas.save()
                    res.status(201).send(consultas.consulta)
            })
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    },


    update(req, res) {
        return consultas
            .findOne({
                username: req.params.id,
            })
            .then(consultas => {
                consultas.consulta = req.body
                consultas.save()
                res.status(200).send(consultas.consulta)
            })
            .catch(error => res.status(400).send(error))
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
                if (consultas === null) {
                    res.status(404).send({ message: "Not found" })
                } else {
                    res.status(200).send(consultas.consulta)
                }
            })
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    }
}