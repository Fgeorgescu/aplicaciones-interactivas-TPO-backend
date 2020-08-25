const Sequelide =require('sequelize');
const especialidad = require('../models').especialidad;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        console.log(`Acá creamos una especialidad: \n nombre: ${req.body.nombre} \n desc: ${req.body.descripcion}`);
        return especialidad
            .create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion.replace(/[\u0800-\uFFFF]/g, '')
            })
            .then(especialidad => res.status(201).send(especialidad))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, res) {
        console.log("Listamos las especialidades")
        return especialidad
            .findAll({})
            .then(especialidad => res.status(200).send(especialidad))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        console.log(`Buscamos por ID: ${req.params.id}`)
        return especialidad
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(especialidad => res.status(200).send(especialidad))
            .catch(error => res.status(400).send(error))
    }
}