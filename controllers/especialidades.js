const Sequelide =require('sequelize');
const especialidades = require('../models').especialidades;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        console.log(`Acá creamos una especialidad: \n nombre: ${req.body.nombre} \n desc: ${req.body.descripcion}`);
        return especialidades
            .create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion.replace(/[\u0800-\uFFFF]/g, '')
            })
            .then(especialidades => res.status(201).send(especialidades))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, res) {
        console.log("Listamos las especialidades")
        return especialidades
            .findAll({})
            .then(especialidades => res.status(200).send(especialidades))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        console.log(`Buscamos por ID: ${req.params.id}`)
        return especialidades
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(especialidades => res.status(200).send(especialidades))
            .catch(error => res.status(400).send(error))
    }
}