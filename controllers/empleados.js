const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const empleados = require('../models').empleados;
const roles = require('../models').roles;
const especialidades = require('../models').especialidades;

const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = {

    /**
     * Creamos un nuevo empleado
     */
    create(req, res) {
        console.log(req.body)
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        return empleados
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                username: req.body.username,
                dni: req.body.dni,
                fecha_nacimiento: new Date(req.body.fecha_nacimiento),
                telefono: req.body.telefono,
                mail: req.body.mail ? req.body.mail : `${req.body.username}@rumano.com`,
                password: hashedPassword,
                rol: req.body.rol ? req.body.rol : "paciente",
                matricula: req.body.matricula,
                especialidad: req.body.especialidad,
            })
            .then(empleados => {
                var token = jwt.sign({
                    id: empleados.id
                }, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(201).send({
                    token: token,
                    username: empleados.username,
                    role: empleados.rol
                })
            })
            .catch(error => {
                console.log("error")
                console.log(error)
                res.status(400).send(error)
            })
    },

    /**
     * Listamos a los empleados
     */
    list(req, res) {
        return empleados
            .findAll({
                where: req.query
            })
            .then(empleados => res.status(200).send(empleados))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por rol
     */
    findById(req, res) {
        return empleados
            .findAll({
                where: 
                    req.query
                
            })
            .then(empleados => res.status(200).send(empleados))
            .catch(error => res.status(400).send(error))
    },

    loginEmpleado(req, res) {
        // Req.Body contains the form submit values.
        var empleadologinInfo = {
            username: req.body.username,
            password: req.body.password
        }
        
        var loginEmpleado;
        // Calling the Service function with the new object from the Request Body
        // Find the User
        empleados.findOne({
            where: {
                username: empleadologinInfo.username
            }
        }).then(empleadoDetails => {
            var passwordIsValid = bcrypt.compareSync(empleadologinInfo.password, empleadoDetails.password);
            if (!passwordIsValid) return res.status(400).json({ status: 400, message: "Invalid username or password" })

            var token = jwt.sign({
                id: empleadoDetails.id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            loginEmpleado = token;
            return res.status(201).json({
                token: loginEmpleado,
                username: empleadoDetails.username,
                role: empleadoDetails.rol,
                message: "Succesfully login"
            })

        }).catch(error => res.status(401).send(error))
    }
}