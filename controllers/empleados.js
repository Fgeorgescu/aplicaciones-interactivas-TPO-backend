const Sequelide =require('sequelize');
const empleados = require('../models').empleados;

module.exports = {

    /**
     * Creamos un nuevo ususario
     */
    create(req, res) {
        return empleados
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                fecha_nacimiento: req.body.fecha_nacimiento,
                telefono: req.body.telefono,
                mail: req.body.mail,
                contraseña_hash: req.body.contraseña_hash,
                rol_id: req.body.rol_id,
                matricula: req.body.matricula,
                especialidad_id: req.body.especialidad_id,
                turnos: 1
            })
            .then(empleados => res.status(201).send(empleados))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Listamos a los ususarios
     */
    list(_, res) {
        return empleados
            .findAll({})
            .then(empleados => res.status(200).send(empleados))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por id
     */
    findById(req, res) {
        return empleados
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(empleados => res.status(200).send(empleados))
            .catch(error => res.status(400).send(error))
    }
}