const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const empleados = require('../models').empleados;
const roles = require('../models').roles;
const especialidades = require('../models').especialidades;

module.exports = {

    /**
     * Creamos un nuevo empleado
     */
    create(req, res) {
        const responseRol = roles.findOne({
            where: {
                rol: req.body.rol
            }
        })

        const responseEspecialidad = especialidades.findOne({
            where: {
                nombre: req.body.especialidad
            }
        })
        console.log(`promise`)

        Promise
            .all([responseRol, responseEspecialidad])
            .then(responses => {
                return empleados
                    .create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        dni: req.body.dni,
                        fecha_nacimiento: req.body.fecha_nacimiento,
                        telefono: req.body.telefono,
                        mail: req.body.mail,
                        contraseña_hash: req.body.contraseña_hash,
                        rol_id: responses[0].id,
                        matricula: req.body.matricula,
                        especialidad_id: responses[1].id,
                        turnos: 1
                    })
                    .then(empleados => res.status(201).send(empleados))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))



    },

    /**
     * Listamos a los empleados
     */
    list(_, res) {
        return empleados
            .findAll({})
            .then(empleados => res.status(200).send(empleados))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por rol
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